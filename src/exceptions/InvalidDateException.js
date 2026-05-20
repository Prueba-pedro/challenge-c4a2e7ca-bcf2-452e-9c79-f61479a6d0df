class InvalidDateException extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidDateException';
  }
}
module.exports = InvalidDateException;