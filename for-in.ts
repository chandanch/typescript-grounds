/**
 * @desc for-in loop
 * @author chandanch
 * Used for iterating over the object properties
 */
let scores = [12, 34, 45, 56, 44, 78, 88, 99];

let car = {
    model: 'chevy55',
    price: 45,
    engineType: 'V8',
    compression: 'DRF'
}

// interating over object properties
for (let key in car) {
    console.log(`Keys: ${key}`);
}

for (let index in scores) {
    console.log(`Index: ${index}`);
}
