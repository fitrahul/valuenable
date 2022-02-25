const express = require("express");
const User = require("../models/user.model");

const router = express.Router();

// signup

router.post("", async (req, res) => {
    const user = await User.create(req.body);
    return res.send({ user });
})


// login 

router.post("/login", async (req, res) => {
    // step 1. check both email and password is correct or not
    var eml = await User.findOne({ $and: [{"email": req.body.email},{"password": req.body.password}] }).lean().exec();

    // step 2. if both are correct return th data of that person
    if (eml !== null) {
        return res.status(201).send({ eml });
    }

    // step 3. otherwise reurn empty
    else {
        return res.send(null);
    }
})


// router.get("", async (req, res) => {
//     const user = await User.find().lean().exec();
//     return res.send({ user });
// })

// router.delete("/:id", async (req, res) => {
//     const user = await User.findByIdAndDelete(req.params.id);
//     return res.send(user)
// })

module.exports = router;
