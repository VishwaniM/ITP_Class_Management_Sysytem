const Schema = mongoose.Schema;
import mongoose from 'mongoose';


//making the decument schema
const noticeSchema = new Schema({
    subject : {
        type : String,
        required: true
    },
    body : {
        type : String,
        required: true
    },
    userid : {
        type : String,
        required : true
    },
    notid : {
        type : String,
        required : true
    },
    time : {
        type : Date,
        required: true
    },
})
//Notice is the Document name(Table name)
const Notice = mongoose.model("Notice",noticeSchema);

export default Notice;