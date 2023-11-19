//add A EXPRESS APP JS
const express = require("express");
const dotenv =require("dotenv")
const bodyParser = require("body-parser");
const firebase = require("./configs/firebaseAdmin");

const userRoutes = require("./routes/userRoutes");

const eventRoutes = require("./routes/eventRoutes");
dotenv.config();
const app = express();




app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send(`API running...`);
});
app.use("/api/user", userRoutes);
app.use("/api/event", eventRoutes);

//app.use("/events", authenticateUser, eventRoutes);
const PORT=process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  // userService.testDatabaseConnection();
});
