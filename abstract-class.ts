/**
 * Creating an abstract class
 */
abstract class Car {
    name: string;
    constructor() {
        this.name = "GTR";
    }

    printname() {
        alert('Car name: '+this.name);
    }
    // an abstract method
    abstract showPrice(): void
}

class Honda extends Car {
    brakeType: string;
    price: number

    // implementing the abstract method
    showPrice() {
        alert('Price: '+this.price)
    }
}

var filepemass = new Honda();
filepemass.name = "dd";

