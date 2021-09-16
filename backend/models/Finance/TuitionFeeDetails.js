const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const FeeDetailsSchema=new Schema({
    
    TeacherId: {
        type: String,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    subjectId: {
        type: String,
        required: true
    },
    subjectName:{
        type: String,

    },
    Amount: {
        type:Number,
        required: true
    }

})

//parameters are tableName,schema name
const TuitionFeeDetails=mongoose.model("FeeDetails", FeeDetailsSchema);

// export
module.exports=TuitionFeeDetails;
