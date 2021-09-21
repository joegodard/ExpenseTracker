const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Establish config path
dotenv.config({ path: './config/config.env' });

// Connect to the mongoose DB
connectDB();

// Establish the transactions routes path
const transactions = require('./routes/transactions');

// Set up server
const app = express();
app.use(express.json());

// Set up morgan for dev environment
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Set up path to use on local host
app.use('/api/v1/transactions', transactions);

// Establish port, default to 5000
const PORT = process.env.PORT || 5000;

// Log to console when server is up and running
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

