let express=require("express")
let router=express.Router()
let {addmerch,merchlogin}=require("../Controller/Merchcont")
router.post("/reg",addmerch)
router.post("/login",merchlogin)
module.exports=router
