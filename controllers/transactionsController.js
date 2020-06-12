const Transaction = require('../models/Transaction')
// This file has all the methods that our model will use for DB stuff

// GET all transactions @route '/api/v1/transactions'
exports.getTransactions = async (req,res, next) =>{
    try {
        const transactions = await Transaction.find()
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    }catch(err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// POST new transaction @route '/api/v1/transactions'
exports.addTransaction = async (req, res, next) => {
    try {
        const {text, amount} = req.body;
        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction
        })
    }catch(err) {
        if (err.name === 'Validation Error') {
            const messages = Object.values(err.errors).map(val => val.message);

            res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

//DELETE new transaction @route '/api/v1/transactions/:id'
exports.deleteTransaction = async (req, res, next) => {
    try {

    }catch(err) {
    
    }
}