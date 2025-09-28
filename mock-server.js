const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


// In-memory data
let payments = [];
let expenses = [];

function generatePayments() {
    payments = [];
    for (let i = 0; i < 10; i++) {
        payments.push({
            id: Math.floor(Math.random() * 10000),
            amount: Math.floor(Math.random() * 2000) + 100,
            status: ['completed', 'pending', 'failed'][Math.floor(Math.random() * 3)],
            date: new Date(Date.now() - Math.floor(Math.random() * 100000000)).toISOString().slice(0, 10)
        });
    }
}

function generateExpenses() {
    expenses = [];
    const categories = ['Travel', 'Office', 'Meals', 'Supplies', 'Software'];
    for (let i = 0; i < 10; i++) {
        expenses.push({
            id: Math.floor(Math.random() * 10000),
            category: categories[Math.floor(Math.random() * categories.length)],
            amount: Math.floor(Math.random() * 500) + 50,
            status: ['approved', 'submitted', 'rejected'][Math.floor(Math.random() * 3)],
            date: new Date(Date.now() - Math.floor(Math.random() * 100000000)).toISOString().slice(0, 10)
        });
    }
}

// Initial data
generatePayments();
generateExpenses();

// Regenerate every 1 minute
setInterval(() => {
    generatePayments();
    generateExpenses();
    console.log('Mock data regenerated');
}, 1 * 60 * 1000);

// Mock payments endpoint
app.get('/api/payments', (req, res) => {
    res.json(payments);
});

// Mock expenses endpoint
app.get('/api/expenses', (req, res) => {
    res.json(expenses);
});

// Mock create payment
app.post('/api/payments', (req, res) => {
    const payment = req.body;
    payment.id = Math.floor(Math.random() * 10000);
    payment.status = 'pending';
    res.status(201).json(payment);
});

// Mock create expense
app.post('/api/expenses', (req, res) => {
    const expense = req.body;
    expense.id = Math.floor(Math.random() * 10000);
    expense.status = 'submitted';
    res.status(201).json(expense);
});

app.listen(PORT, () => {
    console.log(`Mock server running on http://localhost:${PORT}`);
});
