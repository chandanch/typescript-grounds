/**
 * Generic functions work with multiple types using type parameters
 * The type parameter specifies the type that the particular
 * function invocation will use
 * Format function `function_name`<T>(parameters:T): T
 * The type parameter is enclosed in angular brackets
 * The function parameters are enclosed in parantesis
 */

interface ICarDetails {
    color: string;
    model: string;
    price: number;
}

function LogMessage<T>(message: T): T {
    console.log(message);
    return message;
}

let newCarName: string = LogMessage<string>('Camerio Modela');
alert(newCarName);

let newCarDetails: ICarDetails = {
    'color': 'red',
    'model': 'EDCam',
    'price': 3000
} 
let carDetails: ICarDetails = LogMessage<ICarDetails>(newCarDetails);
alert(carDetails);
