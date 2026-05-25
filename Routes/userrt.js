let express=require("express")
let router=express.Router()
let {adduser,login,genotp,resetpwd}=require("../controller/usercont")
router.post("/reg",adduser)
router.post("/login",login)
router.post("/genotp",genotp)
router.post("/resetpwd",resetpwd)
module.exports=router