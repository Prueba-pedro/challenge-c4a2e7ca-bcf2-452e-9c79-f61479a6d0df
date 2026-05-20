const express = require('express');
const router = express.Router();
const transactionService = require('../services/transactionService');

router.post('/', async (req, res, next) => {
  try {
    const transaction = await transactionService.registerTransaction(req.body);
    res.status(201).send(transaction);
  } catch (error) {
    next(error);
  }
});

module.exports = router;