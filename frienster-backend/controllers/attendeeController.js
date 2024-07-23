const attendeeService = require('../services/attendeeService');

// Create a new attendee
const createAttendee = async (req, res) => {
    try {
        const attendeeData = req.body;
        const newAttendee = await attendeeService.createAttendee(attendeeData);
        res.status(201).json({ newAttendee });
    } catch (error) {
        console.error("Error creating attendee:", error);
        res.status(500).json({ message: `${error.message}` });
    }
};

module.exports = { createAttendee };
