class Transaction {
  constructor(id, amount, date, type) {
    this.id = id;
    this.amount = amount;
    this.date = date;
    this.type = type;
  }
}
module.exports = Transaction;