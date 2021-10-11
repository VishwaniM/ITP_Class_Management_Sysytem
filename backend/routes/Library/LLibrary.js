const router = require("express").Router();
let Library = require("../models/library");

router.route("/add").post((req,res)=>{
 
        const title = req.body.title;
        //const BookID = req.body.BookID;
        const AuthorFirstname = req.body.AuthorFirstname;
        const AuthorLastname = req.body.AuthorLastname;
        const Description = req.body.Description;
        const  Language = req.body.Language;
        const Company = req.body.Company;
        const Availability = Number(req.body.Availability);
        const Totalbooks = Number(req.body.Totalbooks);
        

        const newLibrary = new Library({
            title,
            //BookID,
            AuthorFirstname,
            AuthorLastname,
            Description,
            Language,
            Company,
            Availability,
            Totalbooks
        })
        //error checking(js promise)
        newLibrary.save().then(()=>{
            res.json("Book added")
        }).catch((err)=>{
            console.log(err);
        })
        
})

//Read
router.route("/").get((req,res)=>{


    Library.find().then((Library)=>{
        res.json(Library)

    }).catch((err)=>{
        console.log(err)
    })
})

//update
router.route("/update/:id").put(async (req,res)=>{
    let bookId = req.params.id;
    const {title,AuthorFirstname,AuthorLastname,Description,Language,Company,Availability,Totalbooks}= req.body;

    const updateLibrary = {
        title,
        AuthorFirstname,
        AuthorLastname,
        Description,
        Language,
        Company,
        Availability,
        Totalbooks
    }

    const update = await Library.findByIdAndUpdate(bookId, updateLibrary).then(()=>{
        res.status(200).send({status: "Book updates"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
})

//Delete
router.route("/delete/:id").delete(async (req,res) =>{
    let bookId = req.params.id;

    await Library.findByIdAndDelete(bookId).then(() =>{
        res.status(200).send({status:"Book Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.messaage});
    })

})



router.route("/:id").get((req, res) => {
    Library.findById(req.params.id)
    .then( Library=> res.json(Library))
    .catch(err => res.status(400).json('Error: ' + err)); 
  })


module.exports = router;