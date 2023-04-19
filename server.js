const express = require('express')
const movies = require('./controllers/movieController')
const errorHandler = require("./middleware/errorHandler")
const connection = require('./config/dbConnection')
const dotenv = require('dotenv').config()

const app = express()
app.listen(process.env.PORT)
connection()

app.use(express.json())
app.use('/api/movie', require('./routers/movieRoutes'))
app.use('/api/users', require('./routers/userRouter'))

app.use(errorHandler)