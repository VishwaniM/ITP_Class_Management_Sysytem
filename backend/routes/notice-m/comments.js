import express from 'express';
const router = express.Router();
import Comment from '../../models/notice-m/comment.js'


//routing to /addcomment for add comments
router.route("/addcomment").post((req,res)=>{
//getting values from frontend body
    const noticeid = req.body.noticeid;
    const userid = req.body.userid;
    const comment = req.body.comment;
    const time = req.body.time;

    const newComment = new Comment({
        noticeid,
        userid,
        comment,
        time
    })
    newComment.save().then(()=>{
        res.json("New Comment Added")
    }).catch((err)=>{
        console.log(err);
    })
})


//updating specific Comment
router.route("/updatecomment/:comid").put(async(req,res)=>{
    let commentid = req.params.comid;
    const {noticeid, userid, comment, time} = req.body;

    const updateComment = { //assigning values to the object 
        noticeid,
        userid,
        comment,
        time
    }
    const update = await Comment.findByIdAndUpdate(commentid,updateComment).then(()=>{
        res.status(200).send({status: "Comment Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating Comment", error: err.message});
    })
})

//deleting specific Comment
router.route("/deletecomment/:comid").delete(async(req,res)=>{
    let commentid = req.params.comid;
    await Comment.findByIdAndDelete(commentid).then(()=>{
        res.status(200).send({staus: "Comment deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting Comment", error: err.message})
    })
})
//retriving specified Comments of a Notice
router.route("/noticecomments/:notid").get(async (req,res)=>{
    let noticeid = req.params.notid;
    const comment = await Comment.find({noticeid :noticeid}).then((comment)=>{
        res.status(200).send({status: "Comments Fetched", comment})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).setDefaultEncoding({status: "Error with getting Comments",error : err.message});
    })
})


export default router;