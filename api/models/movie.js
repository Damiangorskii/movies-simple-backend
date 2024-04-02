const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  genre: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  runtime: { type: Number, required: true },
  cast: [{ type: String, required: true }],
  rating: { type: Number, required: true },
  boxOffice: { type: Number, required: true },
  language: { type: String, required: true },
  country: { type: String, required: true },
  awards: [{ type: String }],
  posterImage: { type: String }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;