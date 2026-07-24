let mongoose=require("mongoose")
let mersch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "password":String,
    "mobile":String,
    "role":{
        type:String,
        default:"merchant"
    }
})
let Merchant=mongoose.model("merch",mersch)
module.exports=Merchant