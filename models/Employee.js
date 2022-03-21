const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = mongoose.Schema({
    first_name:{
        type: String,
        require: true
    },
    last_name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phone_number:{
        type: String,
        require: true
    },
});
module.exports = Employee = mongoose.model("employees", EmployeeSchema);