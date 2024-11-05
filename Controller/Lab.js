const labModel = require('../Model/Lab')


//create lab
exports.create_lab = async(req,res)=>{
    try {
        let newLab = new labModel(req.body);

        existingLab = await labModel.find({LabCode:newLab.LabCode})

        if (existingLab.length == 0) {
            let saveDetail = await newLab.save()
            .then(saveDetail=>{
                res.status(200).send(saveDetail);
            })
        } else {
            res.status(409).send("Lab already created");
        }
    } catch (error) {
        res.status(409).send("Error " + err);
    }
}


//get all lab
exports.get_all_lab = async(req,res)=>{
    try {
        let getAllLab = await labModel.find({})
        res.status(200).send(getAllLab);
    } catch (error) {
        res.status(409).send("Error " + err);
    }
}

//get lab by id 
exports.lab_get_by_id = async(req,res)=>{
    try {
        let labId = req.params.labId

        let labDetail = await labModel.findById(labId)
        res.status(200).send(labDetail);

    } catch (error) {
        res.status(409).send("Error " + err);
    }
}