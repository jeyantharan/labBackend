const mongoose = require('mongoose')

module.exports = mongoose.model('Reserve', {
    LecturerID: {
        type: String, 
    },
    Date: {
        type: date, 
    },
    TimeSlotID: {
        type: String, 
    }

})