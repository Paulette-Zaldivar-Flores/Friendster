const express = require("express");
const router = express.Router();
const locationController = require("../controllers/locationController");
const authenticateUser = require("../middleware/auth");


router.get("/all",authenticateUser, locationController.getLocations);


module.exports = router;
