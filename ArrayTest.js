let arr1 = [10, 15, 20, "Mahfuz", "$$"]
/*console.log(arr1) // [10, 15, 20, "Mahfuz", "$$"]
console.log(arr1.length) // 5
console.log(arr1[0] ) // 10  
console.log(arr1[3]) // Mahfuz
console.log(arr1[arr1.length-2])// Mahfuz
console.log(typeof arr1) // object

arr1.push("New Element") // adds a new element at the end of the array
console.log(arr1) // [10, 15, 20, "Mahfuz", "$$", "New Element"]

arr1.pop() // removes the last element from the array
console.log(arr1) // [10, 15, 20, "Mahfuz", "$$"]
arr1.unshift("First Element") // adds a new element at the beginning of the array
console.log(arr1) // ["First Element", 10, 15, 20, "Mahfuz", "$$"]
arr1.shift() // removes the first element from the array
console.log(arr1) // [10, 15, 20, "Mahfuz", "$$"]
arr1.unshift("First Element", "Second Element", "Third Element") // adds a new element at the beginning of the array
console.log(arr1) // ["First Element", "Second Element", "Third Element", 10, 15, 20, "Mahfuz", "$$"]
arr1.slice(2, 5) // returns a new array with elements from index 2 to 4
console.log(arr1.slice(2, 5)) // ["Third Element", 10, 15]
console.log(arr1) // ["First Element", "Second Element", "Third Element", 10, 15, 20, "Mahfuz", "$$"]
arr1.splice(2, 3) // removes 3 elements from index 2
console.log(arr1) // ["First Element", "Second Element", "Mahfuz", "$$"]

arr2 = [1, 2, 3, 4, 5]
arr2.forEach((element) => {
    console.log(element) // 1 2 3 4 5
})

arr1.push(arr2) // adds arr2 as a single element at the end of arr1
console.log(arr1) // ["First Element", "Second Element", "Mahfuz", "$$", [1, 2, 3, 4, 5]]
console.log(arr1[arr1.length-1]) // [1, 2, 3, 4, 5]
console.log(arr1[arr1.length-1][0]) // 1*/

let obj1 = {
    name: "Mahfuz",
    age: 25,
}
let obj2 = {
    name: "John",
    age: 30,
}
let obj3 = {
    name: "Jane",
    age: 28,
}
arr1.push(obj1) // adds obj1 as a single element at the end of arr1
/*console.log(arr1) // ["First Element", "Second Element", "Mahfuz", "$$", [1, 2, 3, 4, 5], {name: "Mahfuz", age: 25}]
console.log(arr1[arr1.length-1]) // {name: "Mahfuz", age: 25}
console.log(arr1[arr1.length-1].name) // Mahfuz

arr1.push(obj2, obj3) // adds obj2 and obj3 as single elements at the end of arr1
/*console.log(arr1) // ["First Element", "Second Element", "Mahfuz", "$$", [1, 2, 3, 4, 5], {name: "Mahfuz", age: 25}, {name: "John", age: 30}, {name: "Jane", age: 28}]
console.log(arr1.length) // 8
console.log(arr1[arr1.length-3]) // shows {name: "Mahfuz", age: 25} because it is the third last element in the array
console.log(arr1[arr1.length-1]) // {name: "Jane", age: 28} because it is the last element in the array
console.log(arr1[arr1.length-1].name, arr1[arr1.length-1].age) // Jane 28
console.log(arr1[arr1.length-2]) // {name: "John", age: 30} because it is the because it is object and we are accessing the name and age properties of the object
console.log(arr1[arr1.length-2].name, arr1[arr1.length-2].age) // shows John 30 because it is object and we are accessing the name and age properties of the object

*/

for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === "object" && !Array.isArray(arr1[i])) {
        console.log(arr1[i].name, arr1[i].age) // shows the name and age properties of the object
    }   
}