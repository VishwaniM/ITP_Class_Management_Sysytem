const Schema = mongoose.Schema;
import mongoose from 'mongoose';

//making the decument schema
const paperSchema = new Schema({
    paperdescription : {
        type : String,
        required : true
    },
    year : {
        type : String,
        required: true
    },
    file : {
        type : String,
        required: true
    },

})

//Paper is the Document name(Table name)
const Paper = mongoose.model("Paper",paperSchema);
export default Paper;