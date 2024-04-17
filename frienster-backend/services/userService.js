const pool = require("../configs/db"); // Import your PostgreSQL database connection pool here
const admin = require("firebase-admin");
// Create a new user in the database
const createUser = async (name, email, password) => {
  try {
    const userRecord = await createFirebaseUser(email, password);
    console.log("userRecord", userRecord);

    // Step 2: Insert user data into the PostgreSQL database
    await insertUserIntoDatabase(userRecord.uid, name, email);

    // If the sign-up is successful, generate an ID token for the user
    const idToken = await admin.auth().createCustomToken(userRecord.uid);
    return idToken;
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

    return userRecord; // Return the Firebase UID of the newly created user
  } catch (error) {
    throw error;
  }
};
// Function to insert user data into PostgreSQL database
const insertUserIntoDatabase = async (userId, name, email) => {
  try {
    const query =
      "INSERT INTO users (user_id, name, email) VALUES ($1, $2, $3)";
    const values = [userId, name, email];

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
// Function to handle user login
async function loginUser(email, password) {
  try {
    // Use Firebase Authentication to sign in the user
    const user = await admin.auth().getUserByEmail(email);

    // If the sign-in is successful, generate an ID token for the user
    const idToken = await admin.auth().createCustomToken(user.uid);

    return idToken;
  } catch (error) {
    throw error;
  }
}

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
  findUserByEmail,loginUser,
  testDatabaseConnection,
  // Add other user-related functions here as needed
};
