const express = require("express");
const router = express.Router();
const userService = require("../services/userService");
const utils = require("../utils/utils");
const admin = require("firebase-admin");
// Create a new user
const createUser = async (req, res) => {
    console.log("createUser");
  try {
    const { name, email, password } = req.body;
    const user = await userService.createUser(name, email, password);

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
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Call the user service to handle login logic
    const token = await userService.loginUser(email, password);

    res.status(200).json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(401).json({ error: "Authentication failed" });
  }
};
module.exports = {
  createUser,
  login,
  getUserByEmail,
  // Add other user-related controller functions here as needed
};
