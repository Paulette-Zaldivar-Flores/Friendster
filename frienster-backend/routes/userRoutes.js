const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticateUser  = require("../middleware/auth");

// Define routes for user-related operations

// Create a new user
//router.post("/create", userController.createUser);

// Get a user by email
router.get("/:email", authenticateUser, userController.getUserByEmail);
router.post("/create", userController.createUser);


// Add other user-related routes here as needed

module.exports = router;
