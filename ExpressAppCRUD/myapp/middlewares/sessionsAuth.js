function sessionsAuth(req, res, next){
    //this will make a variable "user" that will be useable in pug files. req.session.user values will only be available if you are logged in
    res.locals.user = req.session.user;
    next()
}

module.exports = sessionsAuth;