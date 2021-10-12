import express from 'express';
const router = express.Router();

import Schedule from '../../models/exam/schedule.js'

//routing to /addschedules for add schedules
router.route("/addschedule").post((req,res)=>{
    //getting values from frontend body
        const schedule_description = req.body.schedule_description;
        const examiner_name = req.body.examiner_name;
        const date_time = req.body.date_time;
        
    
        const newSchedule = new Schedule({
            schedule_description,
            examiner_name,
            date_time 
        })
        newSchedule.save().then(()=>{
            res.json("Schedule Added")
        }).catch((err)=>{
            console.log(err);
        })
    })

        
    //Routing for retrieve all schedules
    router.route("/viewall").get((req,res)=>{
    Schedule.find().then((schedule)=>{ //declaring a variable
        res.json(schedule) //sending all objects to the variable
    }).catch((err)=>{
        console.log(err)
    })
})


//updating schedule
router.route("/updateschedule/:sid").put(async(req,res)=>{
    let scheduleid = req.params.sid;
    const {schedule_description, examiner_name, date_time} = req.body;

    const updateSchedule = { //assigning values to the object 
        schedule_description,
        examiner_name,
        date_time
    }
    const update = await Schedule.findByIdAndUpdate(scheduleid,updateSchedule).then(()=>{
        res.status(200).send({status: "Schedule details Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating Schedules", error: err.message});
    })
})


//deleting specific schedule object
router.route("/deleteschedule/:id").delete(async(req,res)=>{
    let scheduleid = req.params.id;
    await Schedule.findByIdAndDelete(scheduleid).then(()=>{
        res.status(200).send({staus: "Schedule deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting Schedule", error: err.message})
    })
})


//retriving specified schedule
router.route("/findschedule/:id").get(async (req,res)=>{
    let scheduleid = req.params.id;
    const result = await Schedule.findById(scheduleid).then((Schedule)=>{
        res.status(200).send({status: "Schedule found", Schedule})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).setDefaultEncoding({status: "Error with getting Schedule",error : err.message});
    })
})

export default router;