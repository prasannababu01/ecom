let cart=require("../model/cartmodel")
let {v4:uuidv4}=require("uuid")
let addcart=async(req,res)=>{
    try{
    let x= await cart.find({"uid":req.body.uid,"pid":req.body.pid})
    if(x.length==0)
    {
    await new cart({"_id":uuidv4(),...req.body}).save()
res.json({"msg":"prod added into cart"})   
    }
    else{
        res.json({"msg":"prod avl in cart"})
    } 
}
    catch(err)
    {
        console.log(err)
    }
}
let getcart=async(req,res)=>{
    try{
    let data=await cart.find({"uid":req.params.uid})
    res.json(data)
    }
    catch(err)
    {

    }
}
let inc=async(req,res)=>{

    try{
    let data=await cart.findById({"_id":req.params.cid})
    await cart.findByIdAndUpdate({"_id":req.params.cid},{"qty":data.qty+1,"total":data.total+data.price})
    res.json({})
    }
    catch(err)
    {

    }
}
let dec=async(req,res)=>{

    try{
    let data=await cart.findById({"_id":req.params.cid})
    await cart.findByIdAndUpdate({"_id":req.params.cid},{"qty":data.qty-1,"total":data.total-data.price})
    res.json({})
    }
    catch(err)
    {

    }
}
let del=async(req,res)=>{
    try{
       await cart.findByIdAndDelete({"_id":req.params.cid})
        res.json({})
    }
    catch(err)
    {

    }
}
module.exports={addcart,getcart,inc,dec,del}