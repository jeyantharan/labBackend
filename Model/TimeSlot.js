const mongoose = require('mongoose')

module.exports = mongoose.model('TimeSlot', {
    StartTime: {
        type: Number, 
        unique:true
    },
    EndTime:{
        type: Number, 
        unique:true
    },
    Hour:{
        type: Number, 
    }
})