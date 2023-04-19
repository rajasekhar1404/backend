const users = require('../models/userModel')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(404)
        throw new Error('All fields are required')
    }

    const user = await users.findOne({ email })

    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    if (!await bcrypt.compare(password, user.password) || email !== user.email) {
        res.status(403)
        throw new Error('Invalid credentials')
    }

    const accessToken = jwt.sign({
        user: {
            id: user._id.toString(),
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }
    },
    process.env.ACCESS_KEY,
    { expiresIn: "15m"}
    )

    res.status(200)
    res.json({accessToken})

})

const loggedinUser = async (req, res) => {
    const user = await users.findOne({ _id: req.user.id })
    res.status(200)
    res.json(user)
}

const getUsers = asyncHandler(async (req, res) => {
    const data = await users.find()
    res.json(data)
})

const getUser = asyncHandler(async (req, res) => {
    if (!req.params.id) {
        res.status(404)
        throw new Error('user id is required')
    }
    const data = await users.findById(req.params.id)

    if (!data) {
        res.status(404)
        throw new Error('User not found')
    }

    res.json(data)
})

const postUser = asyncHandler(async (req, res) => {
    
    const {firstName, lastName, email, password } = req.body
    
    if(!firstName || !lastName || !email || !password) {
        res.status(404)
        throw new Error('User not found')
    }

    const encryptedPassword = await bcrypt.hash(password, 10)

    const data = await users.create({
        firstName,
        lastName,
        email,
        password: encryptedPassword
    })
    res.json(data)
})

const putUser = asyncHandler(async (req, res) => {

    if (!req.params.id) {
        res.status(404)
        throw new Error('User id required')
    }

    const oldUser = await users.findById(req.params.id)

    if (!oldUser) {
        res.status(404)
        throw new Error('User not found')
    }

    const newUser = await users.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.json(newUser)
})

const deleteUser = asyncHandler(async (req, res) => {
    if (!req.params.id) {
        res.status(404)
        throw new Error('User not found')
    }

    const data = await users.findByIdAndDelete(req.params.id)

    if (!data) {
        res.status(404)
        throw new Error('User not deleted')
    }

    res.json(data)
})

module.exports = {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser,
    login,
    loggedinUser
}