const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: String,
    address: String,
    dateJoined: {
        type: Date,
        default: Date.now
    },
    position: String,
    bankAccount: String,
    
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
