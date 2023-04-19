const jwt = require('jsonwebtoken')

const validateToken = (req, res, next) => {
    let token;
    const authHeader = req.headers.authorization || req.headers.Authorization
    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(" ")[1]
    }
    if (!token) {
        res.status(401)
        throw new Error('User unauthorized')
    }

    jwt.verify(token, process.env.ACCESS_KEY, (err, decoded) => {
        if (err) {
            res.status(401)
            throw new Error('User un authorized')
        }

        req.user = decoded.user
    })

    next()
}

module.exports = validateToken