const express = require("express");
const app = express();

// config env file
require("dotenv").config();
const PORT = process.env.PORT || 4000

// middleware to parse data body
app.use(express.json());

const todoRoutes = require("./routes/todos");

// mount todo route
app.use("/api/v1", todoRoutes);

// start server
app.listen(PORT, () => {
  console.log("Server started at", PORT);
});

// connected to database
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/", (req, res) => {
  res.send("hello");
});
