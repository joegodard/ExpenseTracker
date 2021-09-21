const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions');

// Establish route for getting and adding transactions
router
  .route('/')
  .get(getTransactions)
  .post(addTransaction);

// Establish route for deleting transactions, requires an id
router
  .route('/:id')
  .delete(deleteTransaction);

module.exports = router;