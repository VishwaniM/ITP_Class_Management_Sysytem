import express from 'express';
const router = express.Router();

import Paper from '../../models/exam/paper.js'

//routing to /addpapers for add papers
router.route("/addpaper").post((req,res)=>{
    //getting values from frontend body
        const paperdescription = req.body.paperdescription;
        const year = req.body.year;
        const file = req.body.file;
        
    
        const newPaper = new Paper({
            paperdescription,
            year,
            file
        })
        newPaper.save().then(()=>{
            res.json("Paper Added")
        }).catch((err)=>{
            console.log(err);
        })
    })

    //Routing for retrieve all papers
router.route("/viewall").get((req,res)=>{
    Paper.find().then((paper)=>{ //declaring a variable
        res.json(paper) //sending all objects to the variable
    }).catch((err)=>{
        console.log(err)
    })
})

//updating paper file
router.route("/updatepaper/:id").put(async(req,res)=>{
    let pid = req.params.id;
    const {paperdescription, year, file} = req.body;

    const updatePaper = { //assigning values to the object 
        paperdescription,
        year,
        file
    }
    const update = await Paper.findByIdAndUpdate(pid,updatePaper).then(()=>{
        res.status(200).send({status: "Paper details Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating Papers", error: err.message});
    })
})

//deleting specific paper object
router.route("/deletepaper/:id").delete(async(req,res)=>{
    let pid = req.params.id;
    await Paper.findByIdAndDelete(pid).then(()=>{
        res.status(200).send({staus: "Paper deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting Paper", error: err.message})
    })
})

//retriving specified paper
router.route("/findpaper/:id").get(async (req,res)=>{
    let pid = req.params.id;
    const result = await Paper.findById(pid).then((Paper)=>{
        res.status(200).send({status: "Paper found", Paper})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).setDefaultEncoding({status: "Error with getting Papers",error : err.message});
    })
})

export default router;