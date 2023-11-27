const staff = require("./staffSchema");

//Staff Registration
const registerStaff = (req,res)=>{
    const newStaff = new staff({
        name: req.body.name,
        gender: req.body.gender,
        dob: req.body.dob,
        aadhar: req.body.aadhar,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        jobTitle: req.body.jobTitle,
        department: req.body.department,
        employeeId: req.body.employeeId,
        doh: req.body.doh,
        licenseNo: req.body.licenseNo,
        password: req.body.password,
    });

    newStaff
    .save()
    .then((data)=>{
        res.json({
            status: 200,
            msg: "Staff registration done successfully",
            data: data
        })
    })
    .catch((error)=>{
        res.json({
            status: 500,
            msg: "Staff not registered",
            Error: error,
        });
    });
};

module.exports = {registerStaff};