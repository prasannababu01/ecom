let multer=require("multer")
let {v4:uuidv4}=require("uuid")
let prodmodel=require("../model/prodmodel")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './pimgs')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1])
    }
  })
  
  const upload = multer({ storage: storage })
  let addprod=(req,res)=>{
    let data={...req.body,"_id":uuidv4(),"img":req.file.filename}
   new prodmodel(data).save().then(()=>{
    res.json({"msg":"prod added"})
   }).catch((err)=>{
    res.json({"err":"error in adding prod"})

   })
  }
  let getprod=async(req,res)=>{
    try
    {
    let data=await prodmodel.find()
    res.json(data)
    }
    catch(err)
    {
      console.log(err)
    }


  }
  let addcom=async(req,res)=>{
    let data={...req.body}
    delete data["_id"]
    try{
   await prodmodel.findByIdAndUpdate({"_id":req.body._id},{$push:{"comm":data}})
   res.json({})
    }
    catch(err)
    {

    }
  }
  module.exports={addprod,upload,getprod,addcom}