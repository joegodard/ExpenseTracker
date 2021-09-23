const Account = require('../models/Account');
const Transaction = require('../models/Transaction');
const { getTransactions, deleteTransaction } = require('./transactions');

// @desc    Get all accounts
// @route   GET /api/v1/accounts
exports.getAccounts = async (req, res, next) => {
    try{
        const accounts = await Account.find();

        return res.status(200).json({
            success: true,
            count: accounts.length,
            data: accounts
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc    Add Account
// @route   POST /api/v1/accounts
exports.addAccount = async (req, res, next) => {
    try{
        const { name } = req.body;

        const account = await Account.create(req.body);

        return res.status(201).json({
            success: true,
            data: account
        });
    }
    catch (error) {
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        }
        else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

// @desc    Delete Account
// @route   DELETE /api/v1/accounts/:id
exports.deleteAccount = async (req, res, next) => {
    try{
        const account = await Account.findById(req.params.id);

        if(!account) {
            return res.status(404).json({
                success: false,
                error: 'No Account Found'
            });
        }

        await account.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}