var assert = require('assert');
const Cashier = require('../models/Cashier.js'); 

// Test1 (balance: 2.00, input: 4.00, output: 6.00, "should add the amount to the balance")
// Test2 (balance: 2.00, input: -4.00, output: 6.00, "should throw exception ")
// Test3 (balance: 0.00, input: 4.00, output: 4.00, "should add the amount to the balance")
// Test4 (balance: -2.00, input: 4.00, output: 2.00, "should add the amount to the balance - no restriction on initial balance")

describe('CashierTestCases', function () {
    describe('CorrectBalance', function () {
        it('add 4 to balance of 2', function () {
            let cashier = new Cashier(2);
            cashier.deposit(4);
            console.log('cashiner balance: ' + cashier.balance); // 6
            assert.equal(cashier.balance, 6);
        });
    });
    describe('NegativeInput', function () {
        it('add -4, must throw error', function () {
            let cashier = new Cashier(2);
            assert.throws(() => cashier.deposit(-4), Error);  
        });
    });
    describe('ZeroInitialBalance', function () {
        it('add 4 to balance of 0', function () {
            let cashier = new Cashier();
            cashier.deposit(4);
            console.log('cashiner balance: ' + cashier.balance); // 6
            assert.equal(cashier.balance, 4);
        });
    });
    describe('NegativeInitialBalance', function () {
        it('add 4 to balance of -2', function () {
            let cashier = new Cashier(-2);
            cashier.deposit(4);
            console.log('cashiner balance: ' + cashier.balance); // 6
            assert.equal(cashier.balance, 2);
        });
    });

});