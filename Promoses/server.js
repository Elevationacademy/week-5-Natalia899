const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))




app.get('/randomWord', function (req, res) {
    let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
    let world = words[Math.floor(Math.random() * words.length)]
    res.send(words[Math.floor(Math.random() * words.length)])
})

app.get('/book/:word', function(req, res){
    let word = req.params.word
    urllib.request(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`, function(req, response){
      let data = JSON.parse(response.toString())
      //console.log(data);
      res.send(data)
       })
    })

app.get('gif/:word', function(req, res) {
    const word = req.params.word;
    console.log(word);
    urllib.request(`https://api.giphy.com/v1/gifs/search?api_key=P7m3Oz1ntTBOn3oKUoEH7RLdGEHpmGWa=${word}`, function(err, response) {
        const data = JSON.parse(response.toString());
        console.log(data);
        res.send(data);
    })
})


const port = 3005
app.listen(port, function () {
    console.log(`Server is up and running smoothly`)
})