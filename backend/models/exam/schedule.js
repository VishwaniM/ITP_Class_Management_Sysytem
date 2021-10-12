const Schema = mongoose.Schema;
import mongoose from 'mongoose';
//making the decument schema
const scheduleSchema = new Schema({

    schedule_description : {
        type : String,
        required: true
    },
    examiner_name : {
        type : String,
        required: true
    },
    date_time : {
        type : String,
        required: true
    },

})


//Schedule is the Document name(Table name)
const Schedule = mongoose.model("Schedule",scheduleSchema);
export default Schedule;