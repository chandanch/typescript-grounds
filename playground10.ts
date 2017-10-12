/**
 *@description: using set and get in class instance
 *@author: chandanch
 */
class Person {
    private name: string;

    get nam() {
        return this.name;
    }

    set nam(name) {
        this.name = name;
    }
}

class Human {
   public per: Person;
    constructor() {
        this.per = new Person();
    }
}

class Customer {
    customerChan: Human;

    constructor() {
        this.customerChan = new Human();
        this.customerChan.per.nam = "chan";
        alert(this.customerChan.per.nam);
    }
}
var cust = new Customer();
