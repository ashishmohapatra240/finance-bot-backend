const mongoose = require('mongoose');

const insuranceSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    planName: String,
    coverageAmount: Number,
    premium: Number,
    validFrom: Date,
    validTo: Date,
    
});

const Insurance = mongoose.model('Insurance', insuranceSchema);

module.exports = Insurance;
