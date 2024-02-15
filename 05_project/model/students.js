const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
  },
  email: {
    type: String,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email not valid. Please provide valid E-mail.");
      }
    },
  },
  mobile_no: {
    type: Number,
    minlength: 10,
  },
  address:String,
});


const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;