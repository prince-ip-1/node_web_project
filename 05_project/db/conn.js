const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/student_api")
.then(() => console.log("Connection Success"));