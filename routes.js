const express=require('express')
const router=express.Router()

const staffController = require("./Staff/staffController");


const patientController = require('./Patient/patientController');

// router.get('/', function (req, res) {
//     res.send('Hello World')
//   })

//Staff
router.post('/registerStaff', staffController.registerStaff) 
router.get('/viewAllStaff', staffController.viewAllStaff)
router.post('/viewStaffByDepartment/:department', staffController.viewStaffByDepartment)

//Patient
router.post("/registerPatient", patientController.registerPatient)


module.exports=router