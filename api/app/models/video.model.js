const mongoose = require("mongoose");

const Video = mongoose.model(
  "ObVideo",
  new mongoose.Schema({
    title: String,
    resume: String,
    url: String,
    visibility:String,
  })
);

module.exports = Video;