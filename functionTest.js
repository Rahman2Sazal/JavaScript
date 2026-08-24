function sayHello() {
    console.log("Hello, World!");
}


sayHello(); // Calling the function to print "Hello, World!"


let z = (number1,  number2) => {
    return number1 + number2;
}

console.log("The result of z(5, 3) is: " +  z(5, 3)); // Calling the arrow function to add 5 and 3, returns 8


let myhouse= (houseNumber, streetName, cityName) => {
    return `My house is located at ${houseNumber}, ${streetName}, ${cityName}.`;
}

myhouse(123, "Main St", "New York"); // Calling the arrow function to return the address of the house
console.log(myhouse(123, "Main St", "New York")); // Output: My house is located at 123, Main St, New York.

let mycar= (carBrand, carModel, carYear) => {
    console.log(`My car is a ${carYear} ${carBrand} ${carModel}.`);
}   
mycar("Toyota", "Camry", 2020); // Calling the arrow function to print the car details