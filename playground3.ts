/**
 *@description This playground covers the usage of
 * abstract class
 */
abstract class BankAccount {
    public name: string;
    public accountNumber: number;
    constructor() {
    }
    deposit(amount: number) {
        alert(`Deposited amount: ${amount}`);
    }
    withdraw(amount: number) {
        alert(`Withdraw amount: ${amount}`)
    }

    showAccountInfo() {
        alert(`This account belongs to ${this.name} with account number ${this.accountNumber}`)
    }
}

class CheckingAccount extends BankAccount {

    deposit(amount: number) {
        const interest = 1.34;
        let totalAmount = amount + interest;
        alert(`Amount depsoited with interest: ${totalAmount}`)
    }

    withdraw(amount: number) {
        const serviceChange = 10;
        // We are adding service charge for withdrawal
        // from checking account
        let totalAmount = amount - serviceChange;
        alert(`Amount withdrawed with service charge: ${totalAmount}`);
    }

    changeAccountName(newName: string) {
        this.name = newName;
    }
}

class SavingsAccount extends BankAccount {

    constructor() {
        super();
    }

    deposit(amount: number) {
        super.deposit(amount);
    }

    withdraw(amount: number) {
        super.withdraw(amount);
    }
}

var joecheckinAccount = new CheckingAccount();
joecheckinAccount.name = "JoecheckinAccount Root";
joecheckinAccount.accountNumber = 23456234;
joecheckinAccount.showAccountInfo();
joecheckinAccount.deposit(230);
joecheckinAccount.withdraw(100);


var harrySavingAccount = new SavingsAccount();
harrySavingAccount.name = "Harry Malar";
harrySavingAccount.accountNumber = 567433;
harrySavingAccount.deposit(340);
harrySavingAccount.withdraw(100);
harrySavingAccount.showAccountInfo();

joecheckinAccount.changeAccountName("Joe Griffith");
joecheckinAccount.showAccountInfo();

