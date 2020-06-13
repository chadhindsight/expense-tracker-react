const path = require('path')
const express = require("express");
// Allows you to use environmental variables
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')
const cors = require('cors');

dotenv.config({path: './config/config.env'});
// Connect to database
connectDB();

// Initialize your express thing
const app = express();
app.use(express.json());

app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000", "https://expense-tracker.netlify.app"] 
    })
);

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const transactions = require('./routes/transactions');
// Allows you to connect to the transaction routes from the transations file
app.use('/api/v1/transactions', transactions)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req,res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// Access your global variables stored in config folder
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} mode
on port ${PORT}`.yellow.bold));