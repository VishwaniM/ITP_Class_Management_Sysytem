const Schema = mongoose.Schema;
import mongoose from 'mongoose';
//making the decument schema
const resultSchema = new Schema({
    marksid : {
        type : String,
        required : true
    },
    studentid : {
        type : String,
        required : true
    },
    subjectname : {
        type : String,
        required: true
    },
    marks : {
        type : Number,
        required: true
    },
    grade : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    examcode : {
        type : String,
        required : true
    },

})
//Result is the Document name(Table name)
const Result = mongoose.model("Result",resultSchema);
export default Result;