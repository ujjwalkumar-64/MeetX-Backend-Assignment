const Booking = require("../models/Booking");
const Activity = require("../models/Activity");
const Joi = require("joi");

// Book an activity
const bookActivity = async (req, res) => {
  const schema = Joi.object({
    activityId: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const { activityId } = req.body;
  try {
    const activity = await Activity.findById(activityId);
    if (!activity) return res.status(404).json({ message: "Activity not found" });

    const booking = new Booking({
      userId: req.user.id,
      activityId: activityId,
    });

    await booking.save();
    res.status(201).json({ message: "Activity booked successfully", booking });
  } catch (error) {
    if (error.code === 11000) {
      // Handle duplicate booking error
      return res.status(400).json({message:`You have already booked this activity`});
  }
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all bookings for the logged-in user
const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).populate("activityId");
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { bookActivity, getMyBookings };