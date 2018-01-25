/**
* @description namespace is used to group logically related code
* @author chandanch
*/
namespace CarNameSpace {
    export class Car {
        public carType: string;
        public engine: string;

        getCarInfo() {
            alert(`Car type: ${this.carType} ${this.engine}`);
        }
    }
}

// accessing the members of a namespace
var honda = new CarNameSpace.Car();
honda.carType = "Civic";
honda.engine = "v8";
honda.getCarInfo();
