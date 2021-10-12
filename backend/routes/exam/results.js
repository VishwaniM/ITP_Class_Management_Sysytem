import express from 'express';
const router = express.Router();

import Result from '../../models/exam/result.js'

//routing to /addresult for add results
router.route("/addresult").post((req,res)=>{
    //getting values from frontend body
        const marksid = req.body.marksid;
        const studentid = req.body.studentid;
        const subjectname = req.body.subjectname;
        const marks = Number(req.body.marks);
        function CalG(mg){
            let g="";
            if(mg>74)
             g="A"
            else if(mg>64)
             g="B"
            else if(mg>54)
             g="C"
            else if(mg>34)
             g="S"
            else
             g="W"
            return g
        }
        const grade = CalG(marks);
        const date = req.body.date;
        const examcode = req.body.examcode;
        
    
        const newResult = new Result({
            marksid,
            studentid,
            subjectname,
            marks,
            grade,
            date,
            examcode
        })
        newResult.save().then(()=>{
            res.json("Result Added")
        }).catch((err)=>{
            console.log(err);
        })
    })

    //roting for retrieve all results
router.route("/viewall").get((req,res)=>{
    Result.find().then((result)=>{ //declaring a variable
        res.json(result) //sending all objects to the variable
    }).catch((err)=>{
        console.log(err)
    })
})

//updating result of a student
router.route("/updateresult/:resid").put(async(req,res)=>{
    let resultid = req.params.resid;
    const {marksid,studentid, subjectname, marks,date,examcode} = req.body;
    function CalG(mg){
        let g="";
        if(mg>74)
         g="A"
        else if(mg>64)
         g="B"
        else if(mg>54)
         g="C"
        else if(mg>34)
         g="S"
        else
         g="W"
        return g
    }
    const grade = CalG(marks);
    
    const updateResult = { //assigning values to the object 
        marksid,
        studentid,
        subjectname,
        marks,
        grade,
        date,
        examcode
    }
    const update = await Result.findByIdAndUpdate(resultid,updateResult).then(()=>{
        res.status(200).send({status: "Result Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating Result", error: err.message});
    })
})

//deleting specific result
router.route("/deleteresult/:resid").delete(async(req,res)=>{
    let resultid = req.params.resid;
    await Result.findByIdAndDelete(resultid).then(()=>{
        res.status(200).send({staus: "Result deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting Result", error: err.message})
    })
})

//retriving specified result
router.route("/findresult/:userid").get(async (req,res)=>{
    let uid = req.params.userid;
    const result = await Result.find({studentid :uid}).then((Result)=>{
        res.status(200).send({status: "Result found", Result})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).setDefaultEncoding({status: "Error with getting Results",error : err.message});
    })
})

router.route("/findmarks/:id").get(async (req, res) => {
    let uid = req.params.id;
    const marks = await Result.findById(uid).then((Marks) => {
        res.status(200).send({ status: "Marks Fetched", Marks })
    }).catch((err) => {
        console.log(err.message);
        res.status(500).setDefaultEncoding({ status: "Error with getting Marks", error: err.message });
    })
})
//get marks by Subject
router.route("/findsubresult/:subject").get(async (req,res)=>{
    let subject = req.params.subject;
    const result = await Result.find({subjectname :subject}).then((Result)=>{
        res.json(Result)
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).setDefaultEncoding({status: "Error with getting Results",error : err.message});
    })
})

export default router;
