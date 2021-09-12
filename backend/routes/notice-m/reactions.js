
import express from 'express';
const router = express.Router();
import Reaction from '../../models/notice-m/reactions.js'

//routing to /addreact for submitreactions
router.route("/addreact").post((req,res)=>{
    //getting values from frontend body
        const noticeid = req.body.noticeid;
        const userid = req.body.userid;
        const reaction = req.body.reaction;
    
        const newReact = new Reaction({
            noticeid,
            userid,
            reaction,
        })
        newReact.save().then(()=>{
            res.json("User Reaction Added")
        }).catch((err)=>{
            console.log(err);
        })
    })

    //updating specific reaction
router.route("/updatereaction/:reactid").put(async(req,res)=>{
    let reactionId = req.params.reactid;
    const {noticeid, userid, reaction} = req.body;

    const updateReact = { //assigning values to the object 
        noticeid,
        userid,
        reaction,
    }
    const update = await Reaction.findByIdAndUpdate(reactionId,updateReact).then(()=>{
        res.status(200).send({status: "Reaction Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating Reaction", error: err.message});
    })
})

//Remove user reactions
router.route("/deletereaction/:reactid").delete(async(req,res)=>{
    let reid = req.params.reactid;
    await Reaction.findByIdAndDelete(reid).then(()=>{
        res.status(200).send({staus: "Reaction Removed"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with Removing Reaction", error: err.message})
    })
})

//retriving specified Reactions for a Notice
router.route("/noticereactions/:noticeid").get(async (req,res)=>{
    let nid = req.params.noticeid;
    const reaction = await Reaction.find({noticeid :nid}).then((react)=>{
        res.status(200).send({status: "Reactions Fetched", react})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).setDefaultEncoding({status: "Error with getting Reactions",error : err.message});
    })
})

export default router;