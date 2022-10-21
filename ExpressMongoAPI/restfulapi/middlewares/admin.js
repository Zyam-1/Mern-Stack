function adminAuth(res,res,next){
    if (req.user.role!= "admin") return res.send("you are not authorised ")
    else 
        next()
}
module.exports = adminAuth