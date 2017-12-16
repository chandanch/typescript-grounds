/**
 *@description definining variables of custom types using
 * interface
 */

interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
}

interface ISimpleInterest {
    principal: number;
    rate: number;
    time: number;
    showCurrentDate(): string;
}

class BankAccount {

    getCustomerDetails(customer: IPerson) {
        alert(
            `
                Customer details: \n
                Customer Name: ${customer.firstName} ${customer.lastName}
                Customer Age: ${customer.age}
            `
        )
    }
}
var sueAccount = new BankAccount();
var sueDetails = {
    firstName: "Sue",
    lastName: "Heck",
    age: 23
}
sueAccount.getCustomerDetails(sueDetails);

class LoanAccount {
    public simpleInterest: ISimpleInterest;
    private date = new Date();

    calculateSimpleInterest() {
        this.simpleInterest = {
            principal: 34000,
            rate: 12.3,
            time: 40,
            showCurrentDate: () => {
                return this.date.toString();
            }
        }    
        var si = (this.simpleInterest.principal * this.simpleInterest.rate * this.simpleInterest.time) / 100;
        alert(`Simple interest is ${si}`);
        alert(`${this.simpleInterest.showCurrentDate()}`);
    }
}

var loanAccount = new LoanAccount();
loanAccount.calculateSimpleInterest();
