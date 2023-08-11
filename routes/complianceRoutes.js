const express = require('express');
const Compliance = require('../models/compliance');
const router = express.Router();


router.post('/calculate', async (req, res) => {
    try {
        
        
        const tds = req.body.tds || 0;
        const pf = req.body.pf || 0;
        const pt = req.body.pt || 0;
        const esi = req.body.esi || 0;

        const newCompliance = new Compliance({
            employeeId: req.body.employeeId,
            tds,
            pf,
            pt,
            esi,
            monthYear: req.body.monthYear
        });

        await newCompliance.save();
        res.status(201).json(newCompliance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const compliances = await Compliance.find();
        res.status(200).json(compliances);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const compliance = await Compliance.findById(req.params.id);
        if (!compliance) return res.status(404).json({ message: 'Compliance not found' });
        res.status(200).json(compliance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const updatedCompliance = await Compliance.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCompliance) return res.status(404).json({ message: 'Compliance not found' });
        res.status(200).json(updatedCompliance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const deletedCompliance = await Compliance.findByIdAndRemove(req.params.id);
        if (!deletedCompliance) return res.status(404).json({ message: 'Compliance not found' });
        res.status(200).json({ message: 'Compliance deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
