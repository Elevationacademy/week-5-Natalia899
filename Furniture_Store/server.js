const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]


app.get('/priceCheck/:name', function(request, response){
    let name = request.params.name
    for (let i=0; i<store.length; i++){
        if (store[i].name === name) {

            response.send({price: store[i].price}) 
        return }
    }
    response.send({price: null})
    
})

app.get('/buy/:name', function(request, response) {
    let name = request.params.name
    for (let i=0; i<store.length; i++){
        if (store[i].name === name) {
            store[i].inventory--
            response.send({inventory: store[i].inventory,
                           name: store[i].name,
                        price: store[i].price}) 
        return }
    }
    response.send({inventory: null})
    
})



const port = 3000
app.listen(port, function(){
    console.log(`Server is up and running smoothly`)
})
