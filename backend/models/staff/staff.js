const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const staffSchema = new Schema({
    firstName : {
        type : String,
        required: true
    },
    secondName :{
        type : String,
        required: true
    },
    userID :{
        type : String,
        required: true
    },
    type :{
        type : String,
        Request: true
    },
    position :{
        type : String,
        required: true
    },
    address :{
        type : String,
        required : true
    },
    age :{
        type : Number,
        required: true
    },
    gender :{
        type : String,
        required : true
    },
    nic :{
        type : String,
        required : true
    },
    contactNumber :{
        type : Number,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    
});

const Staff = mongoose.model("staff", staffSchema);
module.exports = Staff;