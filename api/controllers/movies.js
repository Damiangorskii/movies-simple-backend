const Movie = require('../models/movie');

exports.movies_get_all = (req, res, next) => {
  Movie.find()
    .then(result =>
      res.status(200).json({
        data: result,
      })
    )
    .catch(err => res.status(500).json(err));
};

exports.movies_add_new = (req, res, next) => {
  const movie = new Movie({
    title: req.body.title,
    director: req.body.director,
    genre: req.body.genre,
    releaseYear: req.body.releaseYear,
    runtime: req.body.runtime,
    cast: req.body.cast,
    rating: req.body.rating,
    boxOffice: req.body.boxOffice,
    language: req.body.language,
    country: req.body.country,
    awards: req.body.awards,
    posterImage: req.body.posterImage,
  });
  movie
    .save()
    .then(result => {
      res.status(200).json({
        data: result,
      });
    })
    .catch(err => res.status(500).json(err));
};

exports.movies_get_by_id = (req, res, next) => {
  const id = req.params.movieId;
  Movie.findById(id)
    .then(result =>
      res.status(200).json({
        data: result,
      })
    )
    .catch(err => res.status(500).json(err));
};

exports.movies_put_by_id = (req, res, next) => {
  const id = req.params.movieId;
  const newMovie = {
    title: req.body.title,
    director: req.body.director,
    genre: req.body.genre,
    releaseYear: req.body.releaseYear,
    runtime: req.body.runtime,
    cast: req.body.cast,
    rating: req.body.rating,
    boxOffice: req.body.boxOffice,
    language: req.body.language,
    country: req.body.country,
    awards: req.body.awards,
    posterImage: req.body.posterImage,
  };

  Movie.findByIdAndUpdate(id, newMovie)
    .then(() => {
      res.status(200).json({
        data: newMovie
      });
    })
    .catch(err => res.status(500).json(err));
};

exports.movie_delete_by_id = (req, res, next) => {
  const id = req.params.movieId;
  Movie.findByIdAndRemove(id)
    .then(() =>
      res.status(204).json({
      })
    )
    .catch(err => res.status(500).json(err));
};
