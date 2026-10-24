# 🚀 CourseMaster Backend — Online Learning Platform API

The backend API for **CourseMaster**, an online learning platform built with Node.js, Express.js, and MongoDB. It provides API endpoints for authentication, course management, student learning activities, and administrative operations.

🔗 **Live Backend:** https://course-master-backend-nu.vercel.app/  
🔗 **Frontend Application:** https://course-master-front-end-ten.vercel.app/

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Running the Project](#-running-the-project)
- [Deployment](#-deployment)
- [Security Notes](#-security-notes)
- [Author](#-author)
- [License](#-license)

---

## 🎯 Overview

CourseMaster Backend is a REST API that powers the CourseMaster frontend. It handles incoming requests, communicates with MongoDB, and returns JSON responses to the client.

The backend is designed to support course discovery, authentication, student enrollment, assignments, quizzes, and administrative course management.

---

## ✨ Features

### 🔐 Authentication

- User registration and login
- Password hashing and verification
- Token-based authentication
- Protected API routes
- Authentication-related request validation

### 📚 Course Management

- Retrieve available courses
- Retrieve course information
- Create and manage courses through administrative functionality
- Support course-related frontend operations

### 👨‍🎓 Student Learning

- Enrollment-related operations
- Assignment-related endpoints
- Quiz-related endpoints
- User-related operations
- Support for student learning workflows

### 🛠️ Administration

- Administrative routes
- Course management
- User management
- Enrollment management

### 🌐 API & Deployment

- Express.js REST API
- MongoDB database integration with Mongoose
- Environment-based configuration
- CORS configuration for frontend integration
- Vercel deployment support

*The availability and exact behavior of individual features depend on the implementation of their corresponding routes and controllers.*

---

## 🧰 Technology Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend web framework |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| JSON Web Token (JWT) | Token-based authentication |
| bcrypt | Password hashing |
| Zod | Request validation |
| Nodemailer | Email functionality |
| dotenv | Environment variable management |
| Vercel | Backend deployment |

---

## 📁 Project Structure

```text
courseMaster_Backend/
├── api/
│   └── index.js
├── src/
│   ├── config/
│   │   └── db.js
│   ├── middlewares/
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── course.routes.js
│   │   ├── admin.routes.js
│   │   ├── enrollment.routes.js
│   │   ├── assignment.routes.js
│   │   ├── quiz.routes.js
│   │   └── user.routes.js
│   └── controllers/
├── app.js
├── server.js
├── seed.js
├── package.json
├── vercel.json
├── .env.example
└── README.md
```

*Adjust the structure above to match the actual files in your repository.*

---

## ⚙️ Getting Started

### Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- npm
- [MongoDB](https://www.mongodb.com/)
- Git

### 1. Clone the Repository

```bash
git clone YOUR_BACKEND_GITHUB_REPOSITORY_URL
```

Navigate into the project directory:

```bash
cd courseMaster_Backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_random_secret
FRONTEND_URL=http://localhost:5173
```

Use the actual environment variable names required by your implementation. Never commit real credentials to GitHub.

### 4. Start the Development Server

```bash
npm run dev
```

If your `package.json` defines the `dev` script using Nodemon, the server will restart automatically when source files change.

### 5. Start the Production Server Locally

```bash
npm start
```

The API will use the configured port, typically `5000` for local development.

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Port used by the local Express server |
| `MONGODB_URI` | MongoDB connection string |
| `MONGO_URI` | Alternative MongoDB connection variable, if supported by the database configuration |
| `JWT_SECRET` | Secret used to sign and verify JWTs |
| `FRONTEND_URL` | Allowed frontend origin or comma-separated frontend origins |

Your database configuration supports `MONGODB_URI` or `MONGO_URI`. Set the variable that matches your deployment environment.

**Important:** Keep `.env` out of version control. Configure production secrets through Vercel's Environment Variables settings.

---

## 🔌 API Endpoints

The following route prefixes are registered by the application:

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Backend health check |
| `/api/auth` | Authentication routes | Registration and login-related operations |
| `/api/courses` | Course routes | Course-related operations |
| `/api/admin` | Admin routes | Administrative operations |
| `/api/enrollments` | Enrollment routes | Enrollment-related operations |
| `/api/assignments` | Assignment routes | Assignment-related operations |
| `/api/quizzes` | Quiz routes | Quiz-related operations |
| `/api/users` | User routes | User-related operations |

The HTTP methods and specific paths available under each prefix are defined by the corresponding route files.

### Example: Check the API

Open the deployed health-check endpoint:

```text
https://course-master-backend-nu.vercel.app/
```

Expected response:

```text
Course Master Backend Running ✅
```

### Example: Retrieve Courses

```http
GET /api/courses
```

The courses endpoint also supports pagination parameters used by the frontend, for example:

```http
GET /api/courses?page=1&limit=6
```

The exact response structure depends on the endpoint implementation.

---

## 🧪 Running the Project

Start the local development server:

```bash
npm run dev
```

Check the root endpoint:

```text
http://localhost:5000/
```

Check the courses endpoint:

```text
http://localhost:5000/api/courses
```

Ensure MongoDB is reachable and the environment variables are configured correctly before testing API requests.

---

## 🌐 Deployment on Vercel

CourseMaster Backend is deployed on Vercel.

**Production URL:**  
https://course-master-backend-nu.vercel.app/

### Deployment Steps

1. Push the backend repository to GitHub.
2. Import the repository into Vercel.
3. Configure the required production environment variables.
4. Verify the MongoDB connection string and database access.
5. Confirm that the deployment configuration uses `api/index.js` as the serverless entry point.
6. Deploy the project and check the root endpoint.

### Frontend CORS Configuration

The deployed frontend origin is:

```text
https://course-master-front-end-ten.vercel.app
```

Configure `FRONTEND_URL` in Vercel to match the frontend origin. If the variable changes, redeploy the backend so the new configuration takes effect.

---

## 🔒 Security Notes

- Never commit `.env` files or production secrets.
- Use strong JWT secrets in production.
- Hash passwords before storing them in the database.
- Validate and sanitize incoming request data as appropriate.
- Restrict protected routes to authorized users.
- Configure CORS for trusted frontend origins.
- Use secure authentication and authorization practices for administrative operations.

---

## 👨‍💻 Author

**Mahidi Hasan Supon**

- GitHub: [@Mahidi-Hasan-Supon](https://github.com/Mahidi-Hasan-Supon)

---

## 📄 License

No license has been specified yet. Add a `LICENSE` file if you intend to distribute this project under an open-source license.

---

⭐ If you find this project useful, consider starring the repository!
