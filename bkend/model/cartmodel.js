let mongoose=require('mongoose')
let cartsch=new mongoose.Schema({
    "_id":String,
    "uid":String,
    "pid":String,
    "name":String,
    "cat":String,
    "desc":String,
    "price":Number,
    "img":String,
    "qty":{
        type:Number,
        default:1
    },
    "total":Number

})
module.exports=mongoose.model("cart",cartsch)