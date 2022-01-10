const mongoose = require('mongoose')

const newWishTemplate = new mongoose.Schema ({ 
    wish:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('wishtable', newWishTemplate )