const mongoose = require("mongoose") 
const GunSchema = mongoose.Schema({name: String,color: String,weight: {type:Number,min:15,max:100}}) 
module.exports = mongoose.model("Gun",GunSchema) 