const admin = require("firebase-admin");
const getTokenFromHeader = (req) => {
  // Get the Authorization header from the request
  const authHeader = req.headers.authorization;
  if (authHeader) {
    // Split the header into an array using the space character as a separator
    const headerParts = authHeader.split(" ");
    // Check if the array has two parts and the first part is 'Bearer'
    if (headerParts.length === 2 && headerParts[0].toLowerCase() === "bearer") {
      // Return the token (second part of the array)
      return headerParts[1];
    } else {
      // If the header format is not as expected, return null or handle accordingly
      return null;
    }
  } else {
    // If there is no Authorization header, return null or handle accordingly
    return null;
  }
};
const authenticateUser = async (req, res, next) => {
  // const token = req.headers.authorization;
  const token = getTokenFromHeader(req);
  //console.log("token", token);
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    console.log("decodedToken", decodedToken);
    next();
  } catch (error) {
    res.status(401).json({ error: "Authentication failed" });
  }
};

module.exports = authenticateUser;
