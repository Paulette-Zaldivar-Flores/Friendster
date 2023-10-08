//add A EXPRESS APP JS 
const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const authenticateUser = require("./middleware/auth");
const userRoutes = require("./routes/userRoutes");
const userService = require("./services/userService");
const serviceAccount = require("./configs/serviceAccountKey.json");
const registrationRoutes = require("./routes/registrationRoutes");
//const eventRoutes = require("./routes/eventRoutes");

const app = express();
const port = 3000;

// Initialize Firebase Admin SDK

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(bodyParser.json());



// Routes
app.use("/users", authenticateUser, userRoutes);
app.use("/register", registrationRoutes);
//app.use("/events", authenticateUser, eventRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    userService.testDatabaseConnection();
});
