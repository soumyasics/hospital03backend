const mongoose = require("mongoose");

const staffSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  aadhar: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  employeeId: {
    type: String,
    required: true,
  },
  doh: {
    type: String,
    required: true,
  },
  licenseNo: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("staffs", staffSchema);