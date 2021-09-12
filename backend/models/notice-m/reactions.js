const Schema = mongoose.Schema;
import mongoose from 'mongoose';

//making the decument schema

const reactionSchema = new Schema({
    noticeid : {
        type : String,
        required: true
    },
    userid : {
        type : String,
        required: true
    },
    reaction : {
        type : String,
        required : true
    }
    
})
//Reaction is the Document name(Table name)
const Reactions = mongoose.model("Reaction",reactionSchema);

export default Reactions;