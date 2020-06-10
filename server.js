const express = require("express");
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

dotenv.config({path: './config/config.env'});
// Initialize your express thing
const app = express();

app.get('/', (req,res)=> res.send('Hello'));

// Access your global variables from config folder
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} mode
on port ${PORT}`.yellow.bold));