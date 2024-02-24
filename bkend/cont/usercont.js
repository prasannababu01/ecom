let user=require("../model/usermodel")
let bcrypt=require('bcrypt')
let jwt=require("jsonwebtoken")
let adduser=async(req,res)=>{
    try{

        let data=await user.findById({"_id":req.body._id})
        if(data)
        {
            res.json({"err":"email exists in DB"})
        }
        else{
    let hascode=await bcrypt.hash(req.body.password,10)
    await new user({...req.body,"password":hascode}).save()
    res.json({"msg":"acc acreated"})
        }


    }
    catch(err)
    {
        console.log(err)
    }

}
let login=async(req,res)=>{
    try{
    let data=await user.findById({"_id":req.body._id})
    if(data)
    {
        let f=await bcrypt.compare(req.body.password,data.password)
        if(f)
        {
            
            res.json({"token":jwt.sign({"_id":data._id},"abcd"),"_id":data._id,"name":data.name,"role":data.role})

        }
        else{
            res.json({"err":"check password"})
        }

    }
    else{
        res.json({"err":"check email"})
    }
    }
    catch(err)
    {
        console.log(err)
    }


}
module.exports={adduser,login}