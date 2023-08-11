const mongoose = require('mongoose');

const complianceSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    TDS: Number,
    PF: Number,
    PT: Number,
    ESI: Number,
    monthYear: String,
    filed: {
        type: Boolean,
        default: false
    },
    filingDate: Date,
    
});

const Compliance = mongoose.model('Compliance', complianceSchema);

module.exports = Compliance;
