let mongoose=require('mongoose')
let prodsch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "cat":String,
    "desc":String,
    "price":Number,
    "img":String,
    "comm":[]
})
module.exports=mongoose.model("prod",prodsch)