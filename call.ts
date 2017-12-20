/**
 * @desc call() method
 * call is a built-in javascript method that is used to invoke
 * a method. call takes an object as the first argument followed
 * by any number and any type of arguments
 */

var car = {
    name: 'Chevy',
    price: 2000
}

function displayCarDetails(p1,p2) {
    alert(`Car Name: ${this.name}\n Price: ${this.price} ${p1}`);
}

// .call(calling object, argument1, argument2...)
displayCarDetails.call(car, '56', '44');

var car2 = {
    name: 'Doplpin',
    price: 3000
}

displayCarDetails.call(car2, '78', '56');

var autoCar = {
    name: 'CameroUW',
    price: 4000,
    showDetails: function() {
        alert(`Car Name: ${this.name}\n Price: ${this.price}`);
    }
}

var gmAutoCar = {
    name: 'GMAutoZewra',
    price: 4000
}

autoCar.showDetails.call(gmAutoCar);
