/**
 *@description Basic interface usage
 */
interface ICar {
    move();
    stop();
    blowHorn();
}

class Car implements ICar {

    move() {
        alert("Car moved");
    }

    stop() {
        alert("Car stopped");
    }

    blowHorn() {
        alert("peep...");
    }
}

var car = new Car();
car.move();
car.blowHorn();
car.stop();
