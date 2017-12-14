/**
 * Generic constraints allow to work with all and any types
 * only if the type has a property defined as a constrtaint
 * To define contraints to generics we must first create a interface
 * and then use that interface name along with the extends keyoword
 * to define a constriant for a generic function
 */

interface StoreLocation {
    locality: string;
    zip: number;
}

function showStoreLocation<T extends StoreLocation>(store: T) {
    console.log(store);
}

let harryStoreLocation;
harryStoreLocation = {
    locality: 'Main Street',
    zip: 334323,
    forest: true
}
showStoreLocation(harryStoreLocation);
