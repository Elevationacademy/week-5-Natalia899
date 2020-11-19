
const express = require('express')
const app = express()

const path = require('path')

const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, '..', 'node_modules')))

app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, byeeeee")
})

app.get('/books/:bookID', function(request, response){
    let bookID = request.params.bookID
    response.send(data[bookID])
})

const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})