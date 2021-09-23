const express = require('express');
const router = express.Router();
const { getAccounts, addAccount, deleteAccount } = require('../controllers/accounts');

router  
    .route('/')
    .get(getAccounts)
    .post(addAccount);

router
    .route('/:id')
    .delete(deleteAccount);

module.exports = router;