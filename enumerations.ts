/**
 * Enums are used to provide friendly names to numeric values
 * enums can be declared using the enum keyword,
 * followed by the name of the enum and
 * names for numeric values contained inside curly braces
 */
// creating an enum with default values which increments for each name
enum CarCategory { sports, classic, continental }
// access the  numeric value using the enum name
var favCategory: CarCategory = CarCategory.sports;
alert(`My favorite car category: ${favCategory}`);

// assign a specific numeric value to start
enum BrakesCategory { disc = 3, abs, drum }
var favBrakesCategory: BrakesCategory = BrakesCategory.abs;
alert(`My favorite brake: ${favBrakesCategory}`);

// assing specific numeric values to each names 
enum CabinCategory { standard = 7, flexible = 9, custom = 10 }
var favCabinCategory: CabinCategory = CabinCategory.flexible;
// get the name from the enum which stores the numeric value
var favCabinCategoryString = CabinCategory[favCabinCategory];
alert("My favorite cabin "+favCabinCategoryString);
