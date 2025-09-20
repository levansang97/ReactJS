require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

const app = express();

// Middleware
app.use(express.json());

// ✅ Fix CORS
app.use(
    cors({
        origin: "http://localhost:3000", // React app
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Test protected API
// const { authenticateToken } = require("./middleware/authMiddleware");
// app.get("/api/protected", authenticateToken, (req, res) => {
//     res.json({ message: "You have access", user: req.user });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
