const DuplicateTransactionException = require('../exceptions/DuplicateTransactionException');
const InvalidAmountException = require('../exceptions/InvalidAmountException');
const InvalidDateException = require('../exceptions/InvalidDateException');

const globalExceptionHandler = (err, req, res, next) => {
  if (err instanceof DuplicateTransactionException) {
    res.status(400).send({ error: err.message });
  } else if (err instanceof InvalidAmountException) {
    res.status(400).send({ error: err.message });
  } else if (err instanceof InvalidDateException) {
    res.status(400).send({ error: err.message });
  } else {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};
module.exports = globalExceptionHandler;