// authentication service

const bcrypt = require("bcrypt");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const { sendWelcomeEmail } = require("./email.service");

const register = async ({ name, email, password, adminKey }) => {
  const normalizedEmail = email.trim().toLowerCase();
  const exists = await User.findOne({ email: normalizedEmail });
  if (exists) throw new Error("Email already registered");

  const providedKey = typeof adminKey === "string"
    ? adminKey.trim()
    : "";

  let role = "student";

  if (providedKey) {
    const configuredKey = process.env.ADMIN_REGISTRATION_KEY;

    if (!configuredKey) {
      throw new Error("Admin registration is not configured");
    }

    if (providedKey !== configuredKey) {
      throw new Error("Invalid admin registration key");
    }

    role = "admin";
  }


  const passwordHash = await bcrypt.hash(password, 10);

  // Code-12 bug: user can pass role directly in payload without adminKey verification
  //solved
  const user = await User.create({
    name: name.trim(),
    email: normalizedEmail,
    passwordHash,
    // role: role || "student",
    role
  });

  const token = generateToken({ id: user._id, role: user.role });

  // Send welcome email (non-blocking - don't wait for it)
  sendWelcomeEmail(user.email, user.name).catch(err => {
    console.error('Email sending failed (non-critical):', err.message);
  });

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  // Code-5 bug: plaintext equality check instead of bcrypt.compare
  //solved
  const match = await bcrypt.compare(password, user.passwordHash);
  // const match = (password === user.passwordHash);
  if (!match) throw new Error("Invalid email or password");
  // Check whether the user is banned
  if (user.isBanned) {
    throw new Error(
      "Your account has been banned. Please contact the administrator."
    );
  }

  const token = generateToken({ id: user._id, role: user.role });

  return {
    token,
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
  };
};

const getMe = async (userId) => {
  const user = await User.findById(userId).select("-passwordHash");
  if (!user) throw new Error("User not found");
  return user;
};

module.exports = { register, login, getMe };
