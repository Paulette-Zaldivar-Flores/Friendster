const favoriteService = require('../services/favoriteService');

// Create a new event
const createFavorite = async (req, res) => {
    try {
        const favoriteData = req.body;
        const newFavorite = await favoriteService.createFavorite(favoriteData);
        res.status(201).json({ newFavorite });
    } catch (error) {
        console.error("Error creating favorite:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { createFavorite };
