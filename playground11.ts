/**
 * Using constructor to initialize values
 */

class Person {
    private name: string;
    private occupation: string;

    constructor(name: string, occupation: string) {
        this.name = name;
        this.occupation = occupation
    }

    gitPersonDetails() {
        alert(`${this.name} works as ${this.occupation}`)
    }
}

var sam = new Person("Sam Jones", "Casting director");
sam.gitPersonDetails();
