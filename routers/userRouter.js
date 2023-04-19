const express = require('express')
const validateToken = require('../middleware/validateToken')
const { getUsers, postUser, putUser, deleteUser, getUser, login, loggedinUser } = require('../controllers/userController')
const router = express.Router()

router.route('/').get(validateToken, getUsers).post(postUser)
router.route('/:id').put(putUser).delete(deleteUser).get(getUser)
router.route('/login').post(login)
router.route('/logged/user').get(validateToken, loggedinUser)

module.exports = router