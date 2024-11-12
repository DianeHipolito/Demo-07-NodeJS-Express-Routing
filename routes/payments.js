const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'GET all payments' });
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'CREATE a new payment' });
});

router.get('/:id', (req, res) => {
  const paymentId = req.params.id;
  res.status(200).json({ message: `GET payment with ID: ${paymentId}` });
});

router.put('/:id', (req, res) => {
  const paymentId = req.params.id;
  res.status(200).json({ message: `UPDATE payment with ID: ${paymentId}` });
});

router.delete('/:id', (req, res) => {
  const paymentId = req.params.id;
  res.status(200).json({ message: `DELETE payment with ID: ${paymentId}` });
});

module.exports = router;