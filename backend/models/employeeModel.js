const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  dob: {
    type: Date,
    require: true,
  },
  salary: {
    type: String,
    require: true,
  },
  gender: {
    type: Boolean,
    require: true,
  },
});

module.exports = mongoose.model("Employee", schema);
