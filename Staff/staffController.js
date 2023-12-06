const staff = require("./staffSchema");

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

const viewAllStaff = (req,res)=>{
    staff
    .find()
    .exec()
    .then((data)=>{
        res.json({
            status: 500,
            msg: "Staffs shown successfully",
            data: data
        });
    })
    .catch((error)=>{
        res.json({
            status: 200,
            msg: "Staffs not displaying",
            Error: error
        });
    });
};

const viewStaffByDepartment = (req,res)=>{
    staff
    .find({ department: req.params.department })
    .exec()
    .then((data)=>{
        res.json({
            status: 200,
            msg: "Staffs obtained by department successfully",
            data: data
        });
    })
    .catch((error)=>{
        res.json({
            status: 500,
            msg: "Data not obtained",
            Error: error,
        });
    });
}

const viewStaffByEmployeeId = (req,res)=>{
    staff
    .findOne({employeeId: req.params.employeeId})
    .exec()
    .then((data)=>{
        res.json({
            status: 200,
            msg: "Staff data obtained",
            data: data
        });
    })
    .catch((error)=>{
        res.json({
            status: 500,
            msg: "Staff not found",
            Error: error
        });
    });
};

const staffLogin = (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    staff
    .findOne({email: email})
    .exec()
    .then((data)=>{
        if(password === password) {
            res.json({
                status: 200,
                msg: "Staff login successful",
                data: data
            });
        } else {
            res.json({
                status: 500,
                msg: "Incorrect password"
            });
        }
    })
    .catch((error)=>{
        res.json({
            status: 500,
            msg: "User not found",
            Error: error
        });
    });
};

module.exports = { registerStaff, viewAllStaff, viewStaffByDepartment, staffLogin, viewStaffByEmployeeId };