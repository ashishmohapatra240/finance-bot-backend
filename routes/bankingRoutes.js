const express = require('express');
const bankGateway = require('../config/bankGateway');
const router = express.Router();

router.post('/deposit', async (req, res) => {
    const { accountNumber, amount } = req.body;

    if (!accountNumber || !amount) {
        return res.status(400).json({ message: "Account number and amount are required." });
    }

    try {
        const response = await bankGateway.makePayment(accountNumber, amount);
        res.json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
