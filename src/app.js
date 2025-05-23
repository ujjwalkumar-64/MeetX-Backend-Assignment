const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { apiRateLimiter, loginRateLimiter } = require("./middlewares/rateLimiter");
// Load environment variables
dotenv.config(); 


// Initialize Express app
const app = express();
app.use(express.json());


// Import routes
const userRoutes = require("./routes/userRoutes");
const activityRoutes = require("./routes/activityRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

// Apply general rate limiter to all routes
app.use(apiRateLimiter);

// Apply login-specific rate limiter to login route
app.use("/api/users/login", loginRateLimiter); 

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/bookings", bookingRoutes);

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!", error: err.message });
});

// server
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});