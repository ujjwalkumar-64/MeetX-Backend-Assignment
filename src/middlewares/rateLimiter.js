const rateLimit = require("express-rate-limit");

// General rate limiter 
const apiRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 requests per windowMs
    standardHeaders: true, 
    legacyHeaders: false, 
    message: {
        success: false,
        error: "Too many requests from this IP, please try again after 15 minutes.",
    },
});

// Specific rate limiter
const loginRateLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 5, // Limit each IP to 5 login attempts per windowMs
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        error: "Too many login attempts from this IP, please try again after 10 minutes.",
    },
});

module.exports = { apiRateLimiter, loginRateLimiter };