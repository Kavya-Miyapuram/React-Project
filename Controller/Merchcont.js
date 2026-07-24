let Merchant=require("../Model/merchmodel")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")


let addmerch=async(req,res)=>{
    try {
        let exist=await Merchant.findById(req.body._id)
        if(exist){
            return res.status(400).json({message:"Account already exists"})
        }
        else
        {
            let pwdhash=await bcrypt.hash(req.body.password,10)
            let merch=new Merchant({...req.body,password:pwdhash})
            await merch.save()
            res.status(201).json({message:"Bussiness added successfully"})
        }
    } catch (error) {
        res.status(500).json({message:"Error adding admin"})
    }   
}
let merchlogin=async(req,res)=>{
    try {
        let merch=await Merchant.findById(req.body._id)
        if(!merch){
            return res.status(400).json({message:"Merchant not found"})   
         }
         let isMatch=await bcrypt.compare(req.body.password,merch.password)
         if(!isMatch){
             return res.status(400).json({message:"Invalid credentials"})
         }
         res.status(200).json({"token":jwt.sign({_id:merch._id,role:merch.role},process.env.SECRET_KEY,{expiresIn:"1h"}),"name":merch.name,"role":merch.role})
    } catch (error) {
        res.status(500).json({message:"Error logging in admin"})
    }   
}
module.exports={addmerch,merchlogin}