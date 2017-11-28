/**
 * Rest parameters allows to specify a variable number of parameters
 * to a function
 */
function showCarsOwned(customerName: string, ...cars: string[]) {
    alert(`Customer name: ${customerName}\n Cars owned: ${cars.length}`);
}

let harry = showCarsOwned('Harry Longton', 'Chevy', 'Roadrunner', 'Gistol');
