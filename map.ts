/**
 * @desc Maps are the new data structure in es6 that
 * allows mapping of key and value 
 */

// create a map using new key word
let carMap = new Map();

// add entries to the map using set(key, value) 
carMap.set('name', 'Chevron');
carMap.set('price', 1200);
carMap.set('model', 'ZX34500');
carMap.set('bool', 'null');

// get the value of an entry using get(key)
const carName = carMap.get('name');
alert(carName);

//check if the map has a key using has(key)
const iSModelAvailable = carMap.has('model');
alert(iSModelAvailable ? 'Yes': 'No');

// get the size(number of entries) of a map using size property
const carMapSize = carMap.size;
alert(carMapSize);

// delete a entry in a map using delete(key)
let deleteEntry = carMap.delete('bool');
alert(deleteEntry ? 'Deleted Successfully' : 'Delete failed');

// clear the entire map using clear()
carMap.clear();
alert(carMap.size);

// add entries to map as array
let carPriceMap = new Map([
    ['Chevy55', 3400],
    ['NinjaX5', 7800],
    ['Sliveron', 6700]
]);

//keys() returns all the keys in the map as an array
let keys = carPriceMap.keys()
console.log(keys);

// use the async function to iterate over the keys
async function getCarNames() {

    for await (let key of carPriceMap.keys()) {
        //alert(key);
    }
}
getCarNames();

// values() returns the values in the map as an array
let value = carPriceMap.values();
async function getCarPrices() {
    for await (let price of carPriceMap.values()) {
        alert(price);
    }
}
getCarPrices();

// entries() returns key value pair as an array
let entry = carPriceMap.entries();
async function getCars() {
    // destructors can also be used
    for await (let car of carPriceMap.entries()) {
        alert(`Name: ${car[0]} Price: ${car[1]}`);
    }
}
getCars();

