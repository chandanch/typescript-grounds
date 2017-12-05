/**
 * class expressions are similar to class definition
 * We can also give name after the class keyword if required
 */
let Car = class {
    name: string;
    price: number;
}

class Honda extends Car {
    baseType: string;

    printDetails() {
        alert('Name: '+ this.name + 'price:' + this.price)
    }
}

var filepemassa = new Honda();
filepemassa.name = 'Filpe';
filepemassa.price = 3000;
filepemassa.printDetails();
