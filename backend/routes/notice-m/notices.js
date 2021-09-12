import express from 'express';
const router = express.Router();
import Notice from '../../models/notice-m/notice.js'


//routing to /addmotice for add notices
router.route("/addnotice").post((req,res)=>{
//getting values from frontend body
    const subject = req.body.subject;
    const body = req.body.body;
    const userid = req.body.userid;
    const notid = req.body.notid;
    const time = req.body.time;

    const newNotice = new Notice({
        subject,
        body,
        userid,
        notid,
        time
    })
    newNotice.save().then(()=>{
        res.json("New Notice Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//roting for retrieve all notices
router.route("/viewall").get((req,res)=>{
    Notice.find().then((notices)=>{ //declaring a variable
        res.json(notices) //sending all objects to the variable
    }).catch((err)=>{
        console.log(err)
    })
})
//updating specific notice
router.route("/updatenotice/:notid").put(async(req,res)=>{
    let noticeid = req.params.notid;
    const {subject, body, userid,notid, time} = req.body;

    const updateNotice = { //assigning values to the object 
        subject,
        body,
        userid,
        notid,
        time
    }
    const update = await Notice.findByIdAndUpdate(noticeid,updateNotice).then(()=>{
        res.status(200).send({status: "Notice Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating Notice", error: err.message});
    })
})
//deleting specific notice
router.route("/deletenotice/:notid").delete(async(req,res)=>{
    let noticeid = req.params.notid;
    await Notice.findByIdAndDelete(noticeid).then(()=>{
        res.status(200).send({staus: "Notice deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting Notice", error: err.message})
    })
})
//retriving specified notices
router.route("/yournotices/:userid").get(async (req,res)=>{
    let uid = req.params.userid;
    const notice = await Notice.find({userid :uid}).then((Notice)=>{
        res.status(200).send({status: "Notice Fetched", Notice})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).setDefaultEncoding({status: "Error with getting notices",error : err.message});
    })
})

router.route("/vieweditnoit/:notid").get(async (req,res)=>{
    let uid = req.params.notid;
    const notice = await Notice.findById(uid).then((Notice)=>{
        res.status(200).send({status: "Notice Fetched", Notice})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).setDefaultEncoding({status: "Error with getting notices",error : err.message});
    })
})


export default router;