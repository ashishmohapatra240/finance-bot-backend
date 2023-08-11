const express = require('express');
const Salary = require('../models/salary');
const router = express.Router();


router.post('/calculate', async (req, res) => {
    try {
        
        const baseSalary = req.body.baseSalary || 0;
        const bonuses = req.body.bonuses || 0;
        const deductions = req.body.deductions || 0;
        const finalSalary = baseSalary + bonuses - deductions;

        const newSalary = new Salary({
            employeeId: req.body.employeeId,
            baseSalary,
            bonuses,
            deductions,
            finalSalary,
            monthYear: req.body.monthYear
        });

        await newSalary.save();
        res.status(201).json(newSalary);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const salaries = await Salary.find();
        res.status(200).json(salaries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const salary = await Salary.findById(req.params.id);
        if (!salary) return res.status(404).json({ message: 'Salary not found' });
        res.status(200).json(salary);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const updatedSalary = await Salary.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSalary) return res.status(404).json({ message: 'Salary not found' });
        res.status(200).json(updatedSalary);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const deletedSalary = await Salary.findByIdAndRemove(req.params.id);
        if (!deletedSalary) return res.status(404).json({ message: 'Salary not found' });
        res.status(200).json({ message: 'Salary deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
