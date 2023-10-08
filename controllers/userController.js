const express = require("express");
const router = express.Router();
const userService = require("../services/userService");
const utils = require("../utils/utils");

// Create a new user
const createUser = async (req, res) => {
    console.log("createUser");
  try {
    const { name, email, password } = req.body;

    // Hash the user's password (you should use a password hashing library)
    const passwordHash = await utils.hashPassword(password);

    const user = await userService.createUser(name, email, passwordHash);

    res.status(201).json({ user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get a user by email
const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await userService.findUserByEmail(email);

    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Add other user-related controller functions here as needed

module.exports = {
  createUser,
  getUserByEmail,
  // Add other user-related controller functions here as needed
};
