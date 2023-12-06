const patient = require("./patientSchema");

//Patient Registration
const registerPatient = (req, res) => {
  const newPatient = new patient({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    phoneNumber: req.body.phoneNumber,
    aadhar: req.body.aadhar,
    dob: req.body.dob,
    address: req.body.address,
    weight: req.body.weight,
    height: req.body.height,
    bloodGroup: req.body.bloodGroup,
    insurance: req.body.insurance,
    medication: req.body.medication,
    medicalHistory: req.body.medicalHistory,
  });

  newPatient
  .save()
  .then((data)=>{
    res.json({
        status: 200,
        msg: "Patient added successfully",
        data: data
    })
  })
  .catch((error)=>{
    res.json({
        status: 500,
        msg: "patient not registered",
        Error: error,
    })
  })
};

const patientLogin = (req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  patient
  .findOne({email: email})
  .exec()
  .then((data)=>{
    if(password === password){
      res.json({
        status: 200,
        msg: "Patient login successfull",
        data: data
      })
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
      msg: "Patient not found",
      Error: error
    })
  })
}

module.exports = { registerPatient, patientLogin };