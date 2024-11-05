const mongoose = require('mongoose')

module.exports = mongoose.model('Lab', {
    LabName: {
        type: String, 
        unique:true
    },
    LabCode: {
        type: String, 
        unique:true
    },
    Description: {
        type: String, 
        required:true
    }

})