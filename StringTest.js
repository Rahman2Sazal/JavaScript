let fname = "Mahfuz";
console.log(fname.length);
console.log(fname.toUpperCase());
console.log(fname.toLowerCase());
console.log(fname.charAt(0));
console.log(fname[0]);
console.log(fname.indexOf("f"));
console.log(fname.split(""));

let arr=fname.split(" ");
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
