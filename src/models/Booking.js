const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    activityId: { type: mongoose.Schema.Types.ObjectId, ref: "Activity", required: true },
    bookingDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Create a compound index for userId and activityId to enforce uniqueness
bookingSchema.index({ userId: 1, activityId: 1 }, { unique: true });

module.exports = mongoose.model("Booking", bookingSchema);