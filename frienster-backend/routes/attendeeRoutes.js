const express = require('express');
const router = express.Router();
const attendeeController =require('../controllers/attendeeController');
const utils = require('../utils/utils');
const authenticateUser  = require("../middleware/auth");

// Create a new attendee

router.post("/create", authenticateUser, attendeeController.createAttendee);
module.exports = router;
