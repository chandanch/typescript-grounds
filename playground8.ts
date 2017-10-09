/**
 *@description example of multiple inheritance using interface
 *@author chandanch
 */
interface Engine {
    start(type: string);
}
interface Brakes {
    applyBrakes(type: string);
}

class Vehicle implements Engine, Brakes {

    public start(type: string) {
        alert(`Started ${type} engine`)
    }

    public applyBrakes(type: string) {
        alert(`Applied ${type} brakes`)
    }
}

var car = new Vehicle();
car.start("v8");
car.applyBrakes("disks");
