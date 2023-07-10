const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name: String,
  category: String,
  picUrl: String,
  rating: Number
});

const MovieModel = mongoose.model("Movies", MovieSchema);
module.exports = MovieModel;
