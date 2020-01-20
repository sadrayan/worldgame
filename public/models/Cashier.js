class Cashier {
    constructor(balance = 0.00) {
        // Balance is in dollars (floating point)
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than 0.");
        }
        this.balance += amount;
        return this.balance;
    }
}

module.exports = Cashier