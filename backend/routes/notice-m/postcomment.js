import express from 'express';
const router = express.Router();
import Notice from '../../models/notice-m/notice.js'
import Comment from '../../models/notice-m/comment.js'
import reaction from '../../models/notice-m/reactions.js'

//roting for retrieve notice and comments
router.route("/posts").get((req,res)=>{
    Notice.aggregate([{
        $lookup : {
            from : 'comments',
            localField: 'notid',
            foreignField: 'noticeid',
            as : 'output'
            
        }

    }]).then((result)=>{ //declaring a variable
        res.json(result)
}).catch((err)=>{
    console.log(err)
})
})

export default router;