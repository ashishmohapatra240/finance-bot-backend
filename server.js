const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const employeeRoutes = require('./routes/employeeRoutes');
const salaryRoutes = require('./routes/salaryRoutes');
const complianceRoutes = require('./routes/complianceRoutes');
const insuranceRoutes = require('./routes/insuranceRoutes');
const bankingRoutes = require('./routes/bankingRoutes');

const app = express();


app.use(express.json());


const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Failed to connect to MongoDB:', err.message);
});


app.use('/employee', employeeRoutes);
app.use('/salary', salaryRoutes);
app.use('/compliance', complianceRoutes);
app.use('/insurance', insuranceRoutes);
app.use('/bank', bankingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
