let mongoose=require('mongoose')
let usersch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "password":String,
    "role":{
        type:String,
        default:"user"
    }
})
module.exports=mongoose.model("user",usersch)