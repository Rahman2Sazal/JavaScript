

// var can be redeclared and updated

var x = 10;
var x = 20;
console.log(x); // Output: 20

// let can be updated but not redeclared
let y = 30;
// let y = 40; // This will throw an error: Identifier 'y' has already been declared
y = 50;
console.log(y); // Output: 50

// const cannot be updated or redeclared
const z = 60;
// const z = 70; // This will throw an error: Identifier 'z' has already been declared
// z = 80; // This will throw an error: Assignment to constant variable.
console.log(z); // Output: 60