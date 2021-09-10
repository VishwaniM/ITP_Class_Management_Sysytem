import mongoose from 'mongoose';

const studentSchema =  mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number,
    grade: String,
    gender: String,
    address: String,
    fatherName:String,
    motherName:String,
    selectedFile: String,
    birthday: { type: Object },
    createdAt:{
        type:Date,
        default:new Date()
    },
})

const studentManagement = mongoose.model('studentManagement',studentSchema);

export default studentManagement;