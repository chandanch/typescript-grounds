/**
 * Parameters properties are advanced version of assigning the values
 * of the constructor parameters to the properties of a class
 * This can be avoided by using the parameter properties.
 * Parameters properties are created by adding an access modifier
 * to the constructor parameter. 
 * This instructs the compiler to create a property as the same name of
 * as that of the constructor's parameter name and this property is public.
 * The value for property is the value that is passed when calling the constructor.
 */

class Car {
    // parameter property 'carName'
    constructor(public carName: string) {
        alert("Car is " + this.carName);
    }
}

let honda = new Car('Honda');
