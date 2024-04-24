function createAccount(pin, amount) {
    if (typeof pin !== 'string' || pin.length !== 4 || !pin.match(/^\d{4}$/)) {
      throw new Error('Invalid PIN. PIN must be a 4-digit number.');
    }
  
    if (typeof amount !== 'number' || amount < 0) {
      throw new Error('Invalid amount. Amount must be a non-negative number.');
    }
  
    let balance = amount; // Private variable to store the balance
  
    return {
      checkBalance: function(inputPin) {
        if (inputPin === pin) {
          return balance;
        } else {
          return 'Invalid PIN';
        }
      },
  
      deposit: function(inputPin, depositAmount) {
        if (inputPin !== pin) {
          return 'Invalid PIN';
        }
        if (typeof depositAmount !== 'number' || depositAmount < 0) {
          return 'Invalid amount. Deposit amount must be a non-negative number.';
        }
        balance += depositAmount;
        return `Deposited $${depositAmount}. New balance is $${balance}.`;
      },
  
      withdraw: function(inputPin, withdrawAmount) {
        if (inputPin !== pin) {
          return 'Invalid PIN';
        }
        if (typeof withdrawAmount !== 'number' || withdrawAmount < 0 || withdrawAmount > balance) {
          return 'Invalid transaction. Check the amount and your balance.';
        }
        balance -= withdrawAmount;
        return `Withdrawn $${withdrawAmount}. Remaining balance is $${balance}.`;
      }
    };
  }
  
  module.exports = { createAccount };
  