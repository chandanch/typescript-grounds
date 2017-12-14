/**
 * Generic classes are similar to normal classes
 * Except that they accept the type parameters
 * The type of the class is only known during the instantation of the class
 * We define a generic type for the class so that the same type will be used
 * by all the properties of class
 */

class CarProperties {
    name: string;
    id: number;
    description: string;
}

class GenericCarStore<T> {
    carname: T;
    carList: T[] = [];

    addCar(car: T): void {
        this.carList.push(car);
    }

    getCarList(): T[] {
        return this.carList;
    }
}
// instance of Generic class of type string
let harrysCarStore = new GenericCarStore<string>();
harrysCarStore.carname = 'Dundo';
harrysCarStore.addCar(harrysCarStore.carname);
harrysCarStore.addCar('Philxs');
harrysCarStore.addCar('Foner');
let harrysCarList: string[];
harrysCarList  = harrysCarStore.getCarList();
console.log(harrysCarList);

let carProperties = new CarProperties();

carProperties.name = "Floder D";
carProperties.id = 123;
carProperties.description = 'A turbo charged engine';

//instance of generic class of type `CarProperties`
let samCarStore = new GenericCarStore<CarProperties>();
samCarStore.carname = carProperties;
samCarStore.addCar(carProperties);
let samCarList: CarProperties[];
samCarList = samCarStore.getCarList();
console.log(samCarList);
[].forEach.call(samCarList, (car: CarProperties) => {
    console.log(car.description);
}) 
