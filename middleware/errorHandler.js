const constants = require("../constants/constants")
const errorHandler = (err, req, res, next) => {
    const code = res.statusCode ? res.statusCode : 500
    switch(code) {
        case constants.NOT_FOUND :
            res.json({message: err.message})
            break;
        case constants.UNAUTHARIZED :
            res.json({message: err.message})
            break;
        case constants.FORBIDDEN :
            res.json({message: err.message})
            break;
        default :
            res.json({message: err.message, stack: err.stack})
            break;
    }
}

module.exports = errorHandler