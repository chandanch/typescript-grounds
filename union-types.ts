/**
 *@description usage of Union Types in interface
 * union types allow to specify more than one data types
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
