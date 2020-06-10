const express = require("express");
// Allows you to use environmental variables
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')
dotenv.config({path: './config/config.env'});

// Initialize your express thing
const app = express();
// Connect to database
connectDB();
const transactions = require('./routes/transactions');

// Allows you to connect to the transaction routes from the transations file
app.use('/api/v1/transactions', transactions)

// Access your global variables stored in config folder
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} mode
on port ${PORT}`.yellow.bold));