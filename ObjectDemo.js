let obj1 = {};
console.log("Type of obj1:", typeof obj1); // object
obj1.name = "Mahfuz";
obj1.age = 25;
console.log("Value of obj1:", obj1);

const obj2 = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
};

console.log("Salary of obj2:", obj2.salary = 50000); // adds a new property salary to obj2
console.log("Type of obj2:", typeof obj2);
console.log(obj2.name); // John
console.log(obj2.age); // 30
console.log(obj2.address.street); // 123 Main St
console.log(obj2.address.city); // New York
console.log(obj2.address.country); // USA


console.log("Value of obj2:", obj2);

obj1.frinds=obj2; // adds obj2 as a property of obj1   
console.log("Value of obj1:", obj1);
