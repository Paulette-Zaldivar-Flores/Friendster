const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Define routes for user-related operations

// Create a new user
router.post("/user", userController.createUser);


// Add other user-related routes here as needed

module.exports = router;
