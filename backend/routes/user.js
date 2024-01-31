const express = require("express")
const router = express.Router()
const cors = require("cors");
const {User} = require('../db/db')
// const zod = require("zod")
router.use(cors());
router.get('/',(req,res) =>{
    User.find({}).then((response) =>{
        res.json({response})
    })
})

router.post('/',(req,res) =>{
    const Name = req.body.Name
    const  Description = req.body.Description
    const Intrest = req.body.Intrest

    User.create({
        Name ,
        Description,
        Intrest
    })
    .then(() =>{
        res.json({
            msg :"database is created successfully"
        })
    })
    .catch(() =>{
        res.json({
            msg : "there is some error in this code"
        })
    })
})


module.exports = router