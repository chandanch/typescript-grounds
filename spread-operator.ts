/**
 * Spread Operators: These are used to combine two or more objects
 * into one single object. 
 * We use ...<Object name> within the existing object
 */
const hondaDetails = {
    name: 'CVX',
    price: 2000,
    model: 'ELCVX'
}

const hondaFeatures = {
    suspension: 'dual EXHR',
    transmission: 'semi-automatic',
    'chasis-length' : '12mm'
}

// combining the properties of hondaDetails & hondaFeatures in honda object
const honda = { ...hondaDetails, ...hondaFeatures }
alert(JSON.stringify(honda));
