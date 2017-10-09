/**
 *@description example of interface inheritance
 *@author chandanch
 */
interface Person {
    name: string;
    showName();
}

interface Musician extends Person {
    instrument: string;
    instrumentPlayed();
}

class Player implements Musician {
    name: string;
    instrument: string

    showName() {
        alert(`Name: ${this.name}`);
    }

    instrumentPlayed() {
        alert(`Played: ${this.instrument}`);
    }
}

var joe = new Player();
joe.name = "Joe rice";
joe.instrument = "Guitar";
joe.instrumentPlayed();
joe.showName();
