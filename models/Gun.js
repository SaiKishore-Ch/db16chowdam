const mongoose = require("mongoose") 
const GunSchema = mongoose.Schema({name: String,color: String,weight: Number}) 
module.exports = mongoose.model("Gun",GunSchema) 