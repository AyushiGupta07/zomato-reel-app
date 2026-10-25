//create server
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoutes = require("../routes/auth.routes.js");
const foodRoutes = require("../routes/food.routes.js");
const app = express();
dotenv.config();

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Zomato");
});

app.use("/api/auth", authRoutes);

app.use("/api/food", foodRoutes);

module.exports = app;
