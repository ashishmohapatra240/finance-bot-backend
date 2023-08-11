const express = require('express');
const Insurance = require('../models/insurance');
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const newInsurance = new Insurance(req.body);
        await newInsurance.save();
        res.status(201).json(newInsurance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const insurances = await Insurance.find();
        res.status(200).json(insurances);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const insurance = await Insurance.findById(req.params.id);
        if (!insurance) return res.status(404).json({ message: 'Insurance plan not found' });
        res.status(200).json(insurance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const updatedInsurance = await Insurance.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedInsurance) return res.status(404).json({ message: 'Insurance plan not found' });
        res.status(200).json(updatedInsurance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const deletedInsurance = await Insurance.findByIdAndRemove(req.params.id);
        if (!deletedInsurance) return res.status(404).json({ message: 'Insurance plan not found' });
        res.status(200).json({ message: 'Insurance plan deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
