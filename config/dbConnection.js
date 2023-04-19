const mongoose = require('mongoose')

const connection = async () => {
    const connect = await mongoose.connect(process.env.ATLAS_URI)
    console.log("connection established succesffuly !", connect.connection.host, connect.connection.name)
}

module.exports = connection