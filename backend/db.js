const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const databaseURL = process.env.DB;

const databaseConnection = async () => {
  try {
    await mongoose.connect(databaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = databaseConnection;
