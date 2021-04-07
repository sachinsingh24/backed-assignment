const mongoose = require('mongoose')


const bdSchema =new mongoose.Schema({

    name:{
        type:String,
        required:true,
        default: false
    },
    img:{
        type:String,
        required:true,
        default: false

    },
    summary:{
        type:String,
        required:true,
        default: false
    } 
})
 module.exports = mongoose.model('PQR',bdSchema)