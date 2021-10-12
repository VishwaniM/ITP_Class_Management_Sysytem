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
    file_path: {
        type: String,
        required: true
      },
      file_mimetype: {
        type: String,
        required: true
      }
    },
    {
      timestamps: true
    }
  );

//Paper is the Document name(Table name)
const Paper = mongoose.model("Paper",paperSchema);
export default Paper;