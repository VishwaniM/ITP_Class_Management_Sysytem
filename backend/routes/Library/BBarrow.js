const router = require("express").Router();
let Barrow = require("../models/Barrow");

router.route("/add").post((req,res)=>{
    const BookName = req.body.BookName;
    const Firstname= req.body.Firstname;
    const Lastname= req.body.Lastname;
    const NIC= req.body.NIC;
    const email=req.body.email;
    const DateBarrowed= req.body.DateBarrowed;
    const DateReturned= req.body.DateReturned;
    const status=req.body.status;

    const newBarrow = new Barrow({
        BookName,
        Firstname,
        Lastname,
        NIC,
        email,
        DateBarrowed,
        DateReturned,
        status
   })

   //error checking(js promise)
    newBarrow.save().then(()=>{
    res.json("Barrower added")
    }).catch((err)=>{
    console.log(err);
   })

})

//search
router.route("/").get((req,res)=>{

    Barrow.find().then((Barrow)=>{
        res.json(Barrow)

    }).catch((err)=>{
        console.log(err)
    })
})

//update
router.route("/update/:id").put(async (req,res)=>{
    let BarrowId = req.params.id;
    const {BookName,Firstname, Lastname,NIC,email,DateBarrowed,DateReturned,status}= req.body;

    const updateBarrower = {
        BookName,
        Firstname, 
        Lastname,
        NIC,
        email,
        DateBarrowed,
        DateReturned,
        status
    }

    const update = await Barrow.findByIdAndUpdate(BarrowId, updateBarrower).then(()=>{
        res.status(200).send({status: "Barrower updates"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
})

//Delete
router.route("/delete/:id").delete(async (req,res) =>{
    let BarrowId = req.params.id;

    await Barrow.findByIdAndDelete(BarrowId).then(() =>{
        res.status(200).send({status:"Barrower Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete details",error:err.messaage});
    })

})

router.route("/:id").get((req, res) => {
    Barrow.findById(req.params.id)
    .then( Barrow=> res.json(Barrow))
    .catch(err => res.status(400).json('Error: ' + err)); 
  })

module.exports = router;