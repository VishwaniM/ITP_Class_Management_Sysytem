const Schema = mongoose.Schema;
import mongoose from 'mongoose';


//making the decument schema

const commentSchema = new Schema({
    noticeid : {
        type : String,
        required: true
    },
    userid : {
        type : String,
        required: true
    },
    comment : {
        type : String,
        required : true
    },
    time : {
        type : Date,
        required : true
    }
    
})
//Reaction is the Document name(Table name)
const Comments = mongoose.model("Comment",commentSchema);
export default Comments;