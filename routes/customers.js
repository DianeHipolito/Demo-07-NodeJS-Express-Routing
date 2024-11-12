const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'GET all customers' });
});

router.post('/', (req, res) => {
    res.status(201).json({ message: 'CREATE a new customer' });
});

router.get('/:id', (req, res) => {
    const customerId = req.params.id;
    res.status(200).json({ message: `GET customer with ID: ${customerId}` });
});

router.put('/:id', (req, res) => {
    const customerId = req.params.id;
    res.status(200).json({ message: `UPDATE customer with ID: ${customerId}` });
});

router.delete('/:id', (req, res) => {
    const customerId = req.params.id;
    res.status(200).json({ message: `DELETE customer with ID: ${customerId}` });
});

module.exports = router;