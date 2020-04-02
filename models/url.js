const mongoose = require("mongoose");


const urlSchema = new mongoose.Schema({
    longurl:{
        type:String,
        minlength:5
    },
    shorturl:{
        type:String
    },
    code:{
        type:String
    }

},{timestamps:true});



module.exports = mongoose.model("Url", urlSchema);

