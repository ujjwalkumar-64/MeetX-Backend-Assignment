const express = require("express");
const { listActivities,addActivity } = require("../controllers/activityController");
const {authorizeAdmin,authenticate} = require("../middlewares/authMiddleware")
const router = express.Router();

// List all activities
router.post("/", authenticate, authorizeAdmin, addActivity);
router.get("/", listActivities);

module.exports = router;