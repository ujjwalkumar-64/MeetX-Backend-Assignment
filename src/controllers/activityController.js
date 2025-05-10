const Activity = require("../models/Activity");
const Joi = require("joi")

// List all activities
const listActivities = async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

const addActivity = async (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().min(3).required(),
        description: Joi.string().min(10).required(),
        location: Joi.string().min(3).required(),
        date: Joi.date().required(),
        time: Joi.string().required(), 
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { title, description, location, date, time } = req.body;

    try {
        const activity = new Activity({ title, description, location, date, time });
        await activity.save();
        res.status(201).json({ message: "Activity added successfully", activity });
    } catch (err) {
        if (err.code === 11000) {
           return res.status(400).json({message:`Activity with title:${title} at location:${location} already exists`});
        }
        res.status(500).json({ message: "Server error", error });
    }
};

module.exports = { listActivities, addActivity };