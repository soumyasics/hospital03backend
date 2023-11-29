const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  aadhar: {
    type: Number,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
  },
  height: {
    type: Number,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  insurance: {
    type: String,
    required: true,
  },
  medication: {
    type: String,
    required: true,
  },
  medicalHistory: {
    type: String,
  },
});

module.exports = mongoose.model("patients", patientSchema);
