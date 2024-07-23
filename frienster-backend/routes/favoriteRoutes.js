const express = require('express');
const router = express.Router();
const eventController =require('../controllers/favoriteController');
const utils = require('../utils/utils');
const authenticateUser  = require("../middleware/auth");

// Create a new favorite

router.post("/create", authenticateUser, favoriteController.createFavorite);
module.exports = router;
