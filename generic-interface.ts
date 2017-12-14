/**
 * Generic interfaces are similar to normal interfaces
 * The only difference is that it accepts type parameters next to
 * interface name
 * The type of the interface is determined only during the implementation
 * of the interface
 */
interface IcarDetails {
    name: string;
    price: number;
}

// a generic interface
interface Car<T> {
    printDetails: (T) => void;
    addCar: (T) => Array<T>;
}

// now interface of type `IcarDetails`
let honda: Car<IcarDetails>;
let cardetails: IcarDetails = {
    name: 'HondaCTV',
    price: 3000
}
let cardetails2: IcarDetails = {
    name: 'HondaCXV',
    price: 4000,
}
let carNames: Array<IcarDetails> = [];
// implementation of interface with type set as `IcarDetails`
honda = {
    // method that accepts a parameter of type `IcarDetails`
    printDetails: (cardetailsMemo: IcarDetails) => {
        alert(JSON.stringify(cardetailsMemo));
    },
    // method that returns value of type `IcarDetails`
    addCar: (car) => {
        carNames.push(car);
        return carNames;
    }
}
honda.printDetails(cardetails);

console.log(honda.addCar(cardetails));
console.log(honda.addCar(cardetails2));

// type of interface is now string
let cmrCareo: Car<string>;

cmrCareo = {
    // method that accepts a parameter of type string
    printDetails: (carName: string) => {
        alert(`Car Name is ${carName}`)
    },
    addCar: (car) => {
        alert(`${car} Car added`);
        return car;
    }
}
cmrCareo.addCar('CMRCamero R1');
cmrCareo.printDetails('CMRCamero Doger');
