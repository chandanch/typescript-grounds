/**
* @description Using namespace to group logically related code
* @author Chandan
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

var honda = new CarNameSpace.Car();
honda.carType = "Civic";
honda.engine = "v8";
honda.getCarInfo();
