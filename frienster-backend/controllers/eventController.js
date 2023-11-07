const eventService = require('../services/eventService');
// Create a new event
const createEvent = async (req, res) => {
    try {
        const eventData = req.body;
        const newEvent = await eventService.createEvent(eventData);
        res.status(201).json({ newEvent });
    } catch (error) {
        console.error("Error creating event:", error);
        res.status(500).json({ error: "Internal server error" });
        
    }

};

module.exports = { createEvent };