const Schema = mongoose.Schema;
import mongoose from 'mongoose';

//making the decument schema

const userSchema = new Schema({
    username : {
        type : String,
        required: true
    },
    name : {
        type : String,
        required: true
    },
    usertype : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
    
})
//Reaction is the Document name(Table name)
const User = mongoose.model("User-n",userSchema);
export default User;