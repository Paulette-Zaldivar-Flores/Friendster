const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Define routes for user-related operations

// Create a new user
//router.post("/create", userController.createUser);

// Get a user by email
router.get("/:email", userController.getUserByEmail);

// Add other user-related routes here as needed

module.exports = router;
