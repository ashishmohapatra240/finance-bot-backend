const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    baseSalary: {
        type: Number,
        required: true
    },
    bonuses: Number,
    deductions: Number,
    finalSalary: Number,
    monthYear: String,  
    
});

const Salary = mongoose.model('Salary', salarySchema);

module.exports = Salary;
