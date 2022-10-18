function addCheckAuth(req,res,next){
    if(req.session.user) next();
    return res.redirect("/users/login")
}

module.exports = addCheckAuth;