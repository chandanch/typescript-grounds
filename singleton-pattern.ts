class Car {
    // A variable which stores the singleton object. Intially,
    // the variable acts like a placeholder
    private static __car: Car = null;
    // private constructor so that no instance is created
    private constructor() {
    }
    // This is how we create a singleton object
    public static getInstance(): Car {
        // check if an instance of the class is already created
        if (this.__car == null) {
            // If not created create an instance of the class
            // store the instance in the variable
            this.__car = new Car();
        }
        // return the singleton object
        return this.__car
    }
    public getCarName(name: string) {
        alert(`Car is ${name}`)
    }
}

var honda = Car.getInstance();
honda.getCarName('honda');
Car.getInstance().getCarName('desi');
