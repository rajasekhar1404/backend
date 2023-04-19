const express = require('express')
const movies = require('../controllers/movieController')
const router = express.Router()

router.route('/').get(movies.getMovies).post(movies.postMovie)
router.route('/:id').put(movies.putMovie).delete(movies.deleteMovie).get(movies.getMovie)

// router.get("/", movies.getMovie)
// router.post('/', movies.postMovie)
// router.put('/:id', movies.putMovie)
// router.delete('/:id', movies.deleteMovie)

module.exports = router