exports.verifyAdmin = (user,req,res)=>{
    try {
        console.log(user);
        if (user.name === "Admin" && user.email === "admin@sjp.ac.lk") {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        res.status(409).send("Error " + err); 
    }
}