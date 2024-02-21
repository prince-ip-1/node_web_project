const mongoose = require("mongoose");
const validator = require("validator");

var customerSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email. Please provide valid E-mail.");
      }
    },
  },
  mobile: {type:Number},
  is_active :{ type:Number}
});

var Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;