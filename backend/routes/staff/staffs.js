const router = require("express").Router();
let Staff = require("../models/staff");



router.route('/add').post((req, res) => {

    const firstName = req.body.firstName;
    const secondName = req.body.secondName;
    const userID = req.body.userID;
    const type = req.body.type;
    const position = req.body.position;
    const address = req.body.address;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const nic = req.body.nic;
    const contactNumber = Number(req.body.contactNumber);
    const username = req.body.username;
    const password = req.body.password;
    

    const newStaff = new Staff({
        firstName,
        secondName,
        userID,
        type,
        position,
        address,
        age,
        gender,
        nic,
        contactNumber,
        username,
        password
        
    })
    newStaff.save().then(() => {
        res.json("staff added")


    }).catch((err) => {
        console.log(err);
    })
})

//read
router.route("/").get((req, res) => {
    Staff.find().then((staff) => {
        res.json(staff)
    }).catch((err) => {
        console.log(err)
    })

})

//update
router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { firstName, secondName, userID, type, position, address, age, gender, nic, contactNumber, username, password } = req.body;
    const updateStaff = {
        firstName,
        secondName,
        userID,
        type,
        position,
        address,
        age,
        gender,
        nic,
        contactNumber,
        //username,
        password
    }
    const update = await Staff.findByIdAndUpdate(userId, updateStaff)
        .then(() => {
            res.status(200).send({ status: "user updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data, error: err.message" });
        })
})
//delete
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Staff.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: "user deleted" });
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with delete user, error: err.message" });
        })

})

//search
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const user = await Staff.findById(userId)
        .then((staff) => {
            res.status(200).send({ status: "User fetched", staff });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get user, error: err.message" });
        })

})
router.route("/:id").get((req, res) => {
    Staff.findById(req.params.id)
    .then( staff=> res.json(staff))
    .catch(err => res.status(400).json('Error: ' + err)); 
  })
module.exports = router;
