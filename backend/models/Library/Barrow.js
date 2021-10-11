const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BarrowSchema = new Schema({
     
    BookName:{
        type:String,
        required:true
    },
    //BookID:{
       // type:String,
        //required:true
    //},
    Firstname:{
        type:String,
        required:true
    },
    Lastname:{
        type:String,
        required:true
    },
    NIC:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true

    },
    DateBarrowed:{
         type:Date,
         require:true
    },
    DateReturned:{
          type:Date,
          require:true
    },
    status:{
        type:String,
        require:true
    }
})

const Barrow = mongoose.model("Barrow",BarrowSchema);
module.exports = Barrow;