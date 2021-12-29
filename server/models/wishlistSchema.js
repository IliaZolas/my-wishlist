const mongoose = require('mongoose')

const newWishTemplate = new mongoose.Schema ({ 
    wish:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('wishtable', newWishTemplate )