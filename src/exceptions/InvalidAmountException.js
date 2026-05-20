class InvalidAmountException extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidAmountException';
  }
}
module.exports = InvalidAmountException;