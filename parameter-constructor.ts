/**
 *@desc Using parameter constructor to initialize values
 *@author chandanch
 */

class Person {
    private name: string;
    private occupation: string;

    constructor(name: string, occupation: string) {
        this.name = name;
        this.occupation = occupation
    }

    getPersonDetails() {
        alert(`${this.name} works as ${this.occupation}`)
    }
}

var sam = new Person("Sam Jones", "Casting director");
sam.getPersonDetails();
