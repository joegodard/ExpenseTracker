const Transaction = require('../models/Transaction');

// @desc    Get all transactions
// @route   GET /api/v1/transactions
exports.getTransactions = async (req, res, next) => {
  try {
    // Gets all the transactions from the db
    const transactions = await Transaction.find();

    // Success status returned with data
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (error) {
    // Failure status returned
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

// @desc    Add transaction
// @route   POST /api/v1/transactions
exports.addTransaction = async (req, res, next) => {
  try {
    // Gets the text and amount data from req
    const { text, amount } = req.body;

    // Creates a new transaction
    const transaction = await Transaction.create(req.body);
  
    // Returns a success status
    return res.status(201).json({
      success: true,
      data: transaction
    }); 
  } catch (error) {
    // If there is a validation error, grab the error messages
    if(error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);

      // Return fail status with the error messages
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      // Generic server error status
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
}

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
exports.deleteTransaction = async (req, res, next) => {
  try {
    // Finds the transaction with the given id
    const transaction = await Transaction.findById(req.params.id);

    if(!transaction) {
      // If it doesn't exist, 404 error
      return res.status(404).json({
        success: false,
        error: 'No transaction found'
      });
    }

    // Remove the transaction
    await transaction.remove();

    // Return success status
    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (error) {
    // Fail status
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}