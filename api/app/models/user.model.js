const mongoose = require("mongoose");

const User = mongoose.model(
  "ObUser",
  new mongoose.Schema({
    name: String,
    email: String,
    password: String
  })
);

module.exports = User;