const router = require("express").Router();
const userAuth = require('../Middleware/userAuth');

const TimeSlotController = require("../Controller/TimeSlot")

//create time slot
router.post("/createSlot",userAuth.AuthenticateToken,TimeSlotController.create_Time_slot);

router.post("/reserve",userAuth.AuthenticateToken,TimeSlotController.reserve_Time_slot);


module.exports = router;