const express = require('express')
const recordRoutes = express.Router()
const newWishlistItemCopy = require('../models/wishlistSchema')
const Wishes = require('../models/wishlistSchema')

recordRoutes.post('/newwish', (request, response) =>{
    const newWishlist = new newWishlistItemCopy({
        wish:request.body.wish,
    })
    newWishlist.save()
    .then(data =>{
        response.json(data)
        console.log("Send request successful")
    })
    .catch(error => {
        response.json(error)
        console.log("Send request failed")
    }) 
})


recordRoutes.get('/wishes', (request, response) => {
    Wishes.find().then(data => response.json(data))
})

recordRoutes.delete('/delete/:id', (request, response) => {
    Wishes.findByIdAndRemove(request.params.id)
})

module.exports = recordRoutes