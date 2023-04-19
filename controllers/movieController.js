const asyncHandler = require('express-async-handler')
const movie = require('../models/movieModel')

const getMovies = asyncHandler(async(req, res) => {
    const movies = await movie.find()
    res.status(200).json(movies)
})

const getMovie = asyncHandler(async(req, res) => {
    const data = await movie.findById(req.params.id)
    if (!data) {
        res.status(404)
        throw new Error(`Movie not found with id: ${req.params.id}`)
    }
    res.status(200).json(data)
})

const postMovie = asyncHandler(async(req, res) => {
    const { title, imageURL } = req.body
    const data = await movie.create({
        title, imageURL
    })
    res.status(201).json(data)
})

const putMovie = asyncHandler(async(req, res) => {
    const oldMovie = await movie.findById(req.params.id)
    if (!oldMovie) {
        res.status(404)
        throw new Error(`movie not found with id: ${req.params.id}`)
    }
    const updatedMovie = await movie.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(201).json(updatedMovie)
})

const deleteMovie = asyncHandler(async(req, res) => {
    const data = await movie.findByIdAndDelete(req.params.id)
    if(!data) {
        res.status(404)
        throw new Error(`movie not deleted with id ${req.params.id}`)
    }
    res.status(200).json(data)
})

module.exports = {
    getMovies,
    getMovie,
    postMovie,
    putMovie,
    deleteMovie
}