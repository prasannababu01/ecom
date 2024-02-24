let express=require("express")
let bodyParser = require('body-parser')
let mongoose=require('mongoose')
let cors=require('cors')
let cartroute=require("./routes/cartroutes")
const prodroute = require("./routes/prodroutes")
let app=express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use("/img",express.static("./pimgs"))
mongoose.connect("mongodb://127.0.0.1:27017/fsd1ecomdb").then(()=>{
    console.log("ok")
}).catch((err)=>{
    console.log(err)
})
app.use("/",prodroute)
app.use("/cart",cartroute)

app.listen(5000)