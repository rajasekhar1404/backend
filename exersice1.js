var { MongoClient } = require('mongodb')
var express = require('express')

const app = express()
app.listen(8080)

function getMovies() {
    const url = "mongodb+srv://admin:admin@rajasekhar.udi03wn.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);


    return client.connect()
    .then(() => {
        const database = client.db("settings")
        return database;
    })
    .then((database) => {
        const collection = database.collection('movierulz')
        return collection
    })
    .then((collection) => {
        const query = {title: 'Ravanasura'}
        const movie = collection.findOne(query)
        console.log(movie)
        return movie
    }).finally(() => {
        client.close()
    })

}

app.get("/movie", (req, res) => {

    // const url = "mongodb+srv://admin:admin@rajasekhar.udi03wn.mongodb.net/?retryWrites=true&w=majority";
    // const client = new MongoClient(url);
    // var movie = {}

    // const database = client.db("settings")
    // const collection = database.collection('movierulz')


    // const query = {title: 'Ravanasura'}

    // collection.findOne(query)
    // console.log(movie)

    // res.setHeader("Content-Type","application/json")
    // res.writeHead(200)
    // res.end(JSON.stringify(movie))

    const movie = getMovies()
    // console.log("something")
    res.send(movie)
})

// getMovies()