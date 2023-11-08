const express = require('express');
const router = express.Router();
const eventController =require('../controllers/eventController');
const utils = require('../utils/utils');
const  authenticateUser  = require("../middleware/auth"); 

// Create a new event
//router.post('/create', authenticateUser, eventController.createEvent);
router.post("/create",  eventController.createEvent);
module.exports = router;