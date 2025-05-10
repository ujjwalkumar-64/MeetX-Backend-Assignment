const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    title: { type: String, required: true ,unique:true},
    description: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
}, { timestamps: true });

// Create a compound index for title and location
activitySchema.index({ title: 1, location: 1 }, { unique: true });

module.exports = mongoose.model("Activity", activitySchema);