/**
 *@description Basic interface usage -2
 */
interface ICar {
    move(distance: number);
    stop();
    blowHorn();
    isAllWheelDrive(): boolean
}

class Lamborgini implements ICar {

    move(distance: number) {
        alert(`Cat moved ${distance}mts`);
    }

    stop() {
        alert("Car stopped");
    }

    blowHorn() {
        alert("peep..."); 
    }

    isAllWheelDrive(): boolean {
        return false;
    }
}

var lamborgini = new Lamborgini();
lamborgini.move(12);
lamborgini.blowHorn();
lamborgini.stop();
alert(`All wheel drive: ${lamborgini.isAllWheelDrive()}`);
