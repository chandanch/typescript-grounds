/**
 *@description This playground covers the concept of inheritance,
 * Using Get and Set Method
 * Creating constutors
 * Role of super keyword
 * Use of Static keyword
 */
class Car {
    protected brakeType: string = "drums";
    // changed to private
    private static fuelType: string;
    constructor(protected vehicleType: string) {
        console.log(vehicleType)
    }
    startEngine() {
        alert(`Started simple Car engine`);
    }

    showVehicleType() {
        alert(`Vehicle type: ${this.vehicleType}`);
    }
    static showFuelType() {
        alert(`Fuel Type ${this.fuelType}`);
    }

    // sets the static fuelType
    public static setfuelType(fuelType: string) {
        this.fuelType = fuelType;
    }
}

class Lamborghini extends Car {

    constructor(protected vehicleType: string, public model: string) {
        super(vehicleType);
        this.brakeType = "abs";
    }
    startEngine() {
        alert(`Started V-12 340 NM engine`);
        super.startEngine();
    }

    get brake() {
        return this.brakeType;
    }
    set brake(brakeType: string) {
        this.brakeType = brakeType;
    }
}

var lamborghini = new Lamborghini("Sports", "aventador");
lamborghini.startEngine();
lamborghini.showVehicleType();
lamborghini.brake = "Antilock brakes";
alert(`Brakes Type: ${lamborghini.brake}`);
Car.setfuelType("Disel");
Car.showFuelType();
