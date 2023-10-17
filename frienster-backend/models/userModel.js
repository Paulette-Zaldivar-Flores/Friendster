const userService = require("../../services/userService");

// Create a new user in the database using the user service
const createUser = async (name, email, passwordHash) => {
  try {
    return await userService.createUser(name, email, passwordHash);
  } catch (error) {
    throw error;
  }
};

// Find a user by their email using the user service
const findUserByEmail = async (email) => {
  try {
    return await userService.findUserByEmail(email);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  findUserByEmail,
  // Add other user-related functions here as needed
};
