const Transaction = require('../models/transaction');
const DuplicateTransactionException = require('../exceptions/DuplicateTransactionException');
const InvalidAmountException = require('../exceptions/InvalidAmountException');
const InvalidDateException = require('../exceptions/InvalidDateException');

const transactions = [];

const registerTransaction = async (data) => {
  if (transactions.some(t => t.id === data.id)) {
    throw new DuplicateTransactionException('Transaction ID already exists');
  }
  if (data.amount <= 0) {
    throw new InvalidAmountException('Amount must be positive');
  }
  if (isNaN(Date.parse(data.date))) {
    throw new InvalidDateException('Invalid date format');
  }
  const transaction = new Transaction(data.id, data.amount, data.date, data.type);
  transactions.push(transaction);
  return transaction;
};

module.exports = { registerTransaction };