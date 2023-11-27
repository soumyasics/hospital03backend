const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/hospital");

const db = mongoose.connection;
db.on("error", console.error.bind("error"));
db.once("open", () => {
  console.log("Database connection successful");
});

module.exports=db;