const jwt = require('jsonwebtoken');

exports.AuthenticateToken = async(req,res,next)=>{
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        return res.sendStatus(401)
    }else{
        jwt.verify(token,'jeyanth12345@',(err,user)=>{
            if (err) {
                return res.sendStatus(403);
            }else{
                req.user = user;
                next();
            }
        })
    }
}