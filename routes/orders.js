const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'GET all orders' });
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'CREATE a new order' });
});

router.get('/:id', (req, res) => {
  const orderId = req.params.id;
  res.status(200).json({ message: `GET order with ID: ${orderId}` });
});

router.put('/:id', (req, res) => {
  const orderId = req.params.id;
  res.status(200).json({ message: `UPDATE order with ID: ${orderId}` });
});

router.delete('/:id', (req, res) => {
  const orderId = req.params.id;
  res.status(200).json({ message: `DELETE order with ID: ${orderId}` });
});

module.exports = router;