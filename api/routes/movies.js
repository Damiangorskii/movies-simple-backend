const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movies');

router.get('/', movieController.movies_get_all);

router.post('/', movieController.movies_add_new);

router.get('/:movieId', movieController.movies_get_by_id);

router.put('/:movieId', movieController.movies_put_by_id);

router.delete('/:movieId', movieController.movie_delete_by_id);

module.exports = router;
