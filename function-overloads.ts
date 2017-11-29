/**
 * Function overloading: The concept remains the same
 * but the implmentation in typescript is bit different
 * since javascript does not support types and all the types will
 * be removed during the compile.
 * Having same function names will cause problems.
 * Hence we provide only the function definations with same names
 * and only one implementation the implemented function must incorporate
 * type guards to determine which overload was called and what
 * action needs to be performed based on that
 */

let cars = [
    {name: 'chevy56', categoryId: 2, manufacturer: 'Chevrolet Motars'},
    { name: 'Road Runner', categoryId: 3, manufacturer: 'Plymouth' },
    { name: 'Cadillac', categoryId: 4, manufacturer: 'Cadillac Motars' },
    {name: 'Chrysler ', categoryId: 5, manufacturer: 'Chysl'},
]

// function that takes string param
function getCars(manufacturer: string): string[];
// function that takes number param
function getCars(categoryId: number): string[];
// function implementation param type is any
function getCars(searchProperty: any): string[] {
    let carNames: Array<string> = [];
    // typegaurds check the type of searchProperty
    if (typeof searchProperty == 'string') {
        [].forEach.call(cars, (car) => {
            if (car.manufacturer == searchProperty) {
                carNames.push(car.name);
            }
        })
    }
    else if (typeof searchProperty == 'number') {
        for (let car of cars) {
            if (car.categoryId == searchProperty) {
                carNames.push(car.name);
            }
        }
    }
    return carNames;
}

let carsByManufacturer = getCars('Chysl');
carsByManufacturer.forEach(name => {
    alert(name);
})
