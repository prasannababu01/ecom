let express=require('express')
const { addcart, getcart, inc, dec, del } = require('../cont/cartcon')
let route=new express.Router()
route.post("/add",addcart)
route.get("/get/:uid",getcart)
route.get("/inc/:cid",inc)
route.get("/dec/:cid",dec)
route.delete("/del/:cid",del)
module.exports=route