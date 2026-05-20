class DuplicateTransactionException extends Error {
  constructor(message) {
    super(message);
    this.name = 'DuplicateTransactionException';
  }
}
module.exports = DuplicateTransactionException;