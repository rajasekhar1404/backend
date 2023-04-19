const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    imageURL: {
        type: String,
        required: [true, "Image url is required"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("movie", movieSchema)