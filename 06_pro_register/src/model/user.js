const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email Address");
      }
    },
  },
  mobile: Number,
  age: Number,
  password: String,
  is_login : {
    type: Number,
    default: 0, 
  },
});

const User = new mongoose.model('Users', userSchema);

module.exports = User;
