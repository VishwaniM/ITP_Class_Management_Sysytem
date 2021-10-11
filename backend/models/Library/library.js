const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LibrarySchema = new Schema({
     
    title:{
        type:String,
        required:true
    },
    //BookID:{
       // type:String,
        //required:true
    //},
    AuthorFirstname:{
        type:String,
        required:true
    },
    AuthorLastname:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        require:true
    },
    Language:{
        type:String,
         require:true
    },
    Company:{
         type:String,
         require:true
    },
    Availability:{
          type:Number,
          require:true
    },
    Totalbooks:{
           type:Number,
           require:true
    }
})

const Library = mongoose.model("Library",LibrarySchema);
module.exports = Library;