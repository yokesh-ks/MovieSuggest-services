const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  adult: Boolean,
  backdrop_path: String,
  genre_ids: [Number],
  id: Number,
  media_type: String,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  release_date: String,
  title: String,
  video: Boolean,
  vote_average: Number,
  vote_count: Number,
});

const movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;
