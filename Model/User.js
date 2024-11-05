const mongoose = require('mongoose');
const { type } = require('os');


module.exports = mongoose.model('User',{
    Username: {
        type: String,
        required:true
    },
    Email: {
        type:String,
        required:true
    },
    Role: {
        type:String,
        required:true
    },
    Password: {
        type: String,
        required:true
    },
    UserVerified: {
        type:Boolean,
        default:false,
    },
    createdAt: {
        type: Date,
        default: new Date()
      }
})