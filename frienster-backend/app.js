//add A EXPRESS APP JS
const express = require("express");
const dotenv =require("dotenv")
const bodyParser = require("body-parser");
const firebase = require("./configs/firebaseAdmin");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const eventRoutes = require("./routes/eventRoutes");
const locationRoutes = require("./routes/locationRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");

const { login } = require("./controllers/userController");
dotenv.config();
const app = express();


app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send(`API running...`);
});
app.use("/api/user", userRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/favorite", favoriteRoutes);

//app.use("/events", authenticateUser, eventRoutes);
const PORT=process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  // userService.testDatabaseConnection();
});
