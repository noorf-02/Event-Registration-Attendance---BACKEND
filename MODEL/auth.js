const mongoose = require('mongoose');
const { Schema } = mongoose;

const authSchema = new Schema ({
    username:{
        type:String,
        required:true,
        maxlength:50,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true, 
        minlenght:8,
    },
    role:{
        type:String,
        enum:['attendee', 'organizer'],
        required:true,
        default: 'attendee'
    }
});

const Auth = mongoose.model('Auth', authSchema);
module.exports = Auth;