const router = require("express").Router();

const labController = require("../Controller/Lab")

//create lab
router.post("/createLab",labController.create_lab);

//get all lab
router.get("/getalllab",labController.get_all_lab);

// get lab by id
router.get("/:labId",labController.lab_get_by_id);


module.exports = router;