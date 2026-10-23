// controller for authentication routes

const authService = require("../services/auth.service");

const register = async (req, res) => {
  try {
    const data = await authService.register(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const data = await authService.login(req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const me = async (req, res) => {
  try {
      console.log("JWT user:", req.user);
    // console.log("MongoDB:", User.db.name);
    // console.log("Collection:", User.collection.name);
    const user = await authService.getMe(req.user.id);
    res.json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
     console.error("GET /me error:", err.message);
  }
};

module.exports = { register, login, me };

