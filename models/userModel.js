const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    firstName: {
        type:String,
        required: [true, "first name is required"]
    },
    lastName: {
        type:String,
        required: [true, "Last name is required"]
    },
    email: {
        type:String,
        required: [true, "email is required"]
    },
    password: {
        type:String,
        required: [true, "password is required"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('user', userModel)