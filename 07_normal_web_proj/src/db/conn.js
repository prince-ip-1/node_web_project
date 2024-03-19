const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/07_project_data').then(()=>console.log('Connected'));