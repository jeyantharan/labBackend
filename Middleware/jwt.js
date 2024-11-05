const jwt = require('jsonwebtoken');


exports.CreateToken = async(name,email,role)=>{
    let user = {
        name:name,
        email:email,
        role:role
    }

    const accessToken = jwt.sign(user,'jeyanth12345@')
    return accessToken;
}