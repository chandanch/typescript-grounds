/**
 *@description: using set and get in class instance
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

class Chan {
   public per: Person;
    constructor() {
        this.per = new Person();
    }
}

class Customer {
    customerChan: Chan;

    constructor() {
        this.customerChan = new Chan();
        this.customerChan.per.nam = "chan";
        alert(this.customerChan.per.nam);
    }
}
var cust = new Customer();
