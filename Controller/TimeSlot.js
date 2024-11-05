const TimeSlotModel = require("../Model/TimeSlot")
const admin = require("../Middleware/admin");



exports.create_Time_slot = async(req,res)=>{
    try {
        userDatails = req.user;
        console.log(userDatails);
        const verify = await admin.verifyAdmin(userDatails);
        if (verify == true) {
            let newSlot = new TimeSlotModel(req.body);
            newSlot.Hour = newSlot.EndTime - newSlot.StartTime
            await newSlot.save().then((saveDetail) => {
                res.status(200).send(saveDetail);
              });
        } else {
            res.status("401").send("Unauthorized request");
        }

    } catch (error) {
        res.status(409).send("Error " + error);
    }
}

exports.reserve_Time_slot = async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(409).send("Error " + error);
    }
}