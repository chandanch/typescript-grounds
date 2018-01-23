/**
 *@description usage of Union Types in interface
 *@author chandanch
 */

interface IPerson {
    firstName: string;
    lastName: string;
    age: number | number[] | string;
}

var customer: IPerson;
customer = {
    firstName: "Fathima",
    lastName: "Raiz",
    age: 23
}
//alert(JSON.stringify(customer));

var twins: IPerson;
twins = {
    firstName: "David",
    lastName: "lodman",
    age: [23,44]
}
alert(JSON.stringify(twins));
