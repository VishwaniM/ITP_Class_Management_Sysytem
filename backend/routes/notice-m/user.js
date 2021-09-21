import express from 'express';
const router = express.Router();
import User from '../../models/notice-m/users.js'



//Adding user for login
router.route("/adduser").post(async(req,res)=>{

        const username = req.body.username;
        const name = req.body.name;
        const usertype = req.body.usertype;
        const password = req.body.password;
    
        const newUser = new User({
            username,
            name,
            usertype,
            password
        })
        newUser.save().then(()=>{
            res.json("User Added")
        }).catch((err)=>{
            console.log(err);
        })
    })

    //Retrieving a User
    router.route("/finduser/:username/:pass").get(async (req,res)=>{
        let username = req.params.username;
        let pass = req.params.pass;
        const user = await User.findOne({username :username, password:pass}).then((user)=>{
            res.status(200).send({user})

        }).catch((err)=>{
            console.log(err.message);
            res.status(500).setDefaultEncoding({status: "Error with getting Reactions",error : err.message});
        })
    })



export default router;
   
