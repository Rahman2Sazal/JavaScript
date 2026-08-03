let fname = "Mahfuzur Rahman";
console.log(fname.length);
console.log(fname.toUpperCase());
console.log(fname.toLowerCase());
console.log(fname.charAt(0));   
console.log(fname[0]);
console.log(fname.indexOf("f"));
console.log((fname.trim( )));   
console.log(fname.split(""));

let arr=fname.split(" ");
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log(fname.trim( ));  

let str = "Hello World 616";
console.log(str);
let value=str.split(" ") [2];
console.log(value);
console.log(typeof value);
let num = parseInt(value);
console.log(num);
console.log(typeof num);    
