const pool = require("../configs/db"); // Import your PostgreSQL database connection pool here
const admin = require("firebase-admin");
// Create a new user in the database
const createUser = async (name, email, passwordHash) => {
  try {
    const userId = await createFirebaseUser(email, passwordHash);

    // Step 2: Insert user data into the PostgreSQL database
    await insertUserIntoDatabase(userId, name, email, passwordHash);

    return userId; // Return the Firebase UID of the newly created user
  } catch (error) {
    throw error;
  }
};
// Function to create a user in Firebase Authentication
const createFirebaseUser = async (email, password) => {
  try {
    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
    });

    return userRecord.uid; // Return the Firebase UID of the newly created user
  } catch (error) {
    throw error;
  }
};
// Function to insert user data into PostgreSQL database
const insertUserIntoDatabase = async (userId, name, email, passwordHash) => {
  try {
    const query =
      "INSERT INTO users (user_id, name, email,password_hash) VALUES ($1, $2, $3, $4)";
    const values = [userId, name, email, passwordHash];

    await pool.query(query, values); // Insert user data into the database
  } catch (error) {
    throw error;
  }
};

// Find a user by their email
const findUserByEmail = async (email) => {
  try {
    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];

    const { rows } = await pool.query(query, values);

    return rows[0]; // Return the user if found, otherwise null
  } catch (error) {
    throw error;
  }
};

const testDatabaseConnection = async () => {
  try {
    await pool.query("SELECT NOW()"); // A simple query to check the connection
    console.log("Database connection is OK");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = {
  createUser,
  findUserByEmail,
  testDatabaseConnection,
  // Add other user-related functions here as needed
};
