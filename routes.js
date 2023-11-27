const express=require('express')
const router=express.Router()
const staffController = require("./Staff/staffController");


// router.get('/', function (req, res) {
//     res.send('Hello World')
//   })

//Staff
router.post('/registerStaff', staffController.registerStaff) 

module.exports=router