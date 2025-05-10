const express = require("express");
const { bookActivity, getMyBookings } = require("../controllers/bookingController");
const { authenticate } = require("../middlewares/authMiddleware");
const router = express.Router();

// Book an activity (Authorized users only)
router.post("/", authenticate, bookActivity);

// Get all bookings for the logged-in user
router.get("/", authenticate, getMyBookings);

module.exports = router;