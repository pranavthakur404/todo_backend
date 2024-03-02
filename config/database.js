const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATEBASE_URL)
    .then(() => console.log("DB successfully connected"))
    .catch(() => {
      console.log("Failed to connect");
      process.exit(1);
    });
};

module.exports = dbConnect;
