
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const vegetables = ["spinach", "paprika", "cabbagea"];

//Length
let size = fruits.length;

console.log("Length : " + size);
console.log("array : " + fruits + "\n");

//toString()
let fruits1 = fruits.toString();

console.log("toString : " + fruits1);
console.log("array : " + fruits + "\n");

//join()
let fruits2 = fruits.join(" - ");

console.log("join : " + fruits2);
console.log("array : " + fruits + "\n");

//pop()
let fruits3 = fruits.pop();

console.log("pop : " + fruits3)
console.log("array : " + fruits + "\n");

//push()
let fruits4 = fruits.push("kiwi");

console.log("push : " + fruits4);
console.log("array : " + fruits + "\n");

//shift()
let fruits5 = fruits.shift();

console.log("shift : " + fruits5);
console.log("array : " + fruits + "\n");

//unshift ()
let fruits6 = fruits.unshift("lemon");

console.log("unshift : " + fruits6);
console.log("array : " + fruits + "\n");

//concat
const all = fruits.concat(vegetables);

console.log("concat : " + all);
console.log("array : " + fruits + "\n");

//slice()
console.log("slice : " + fruits.slice(1, 2));
console.log("array : " + fruits + "\n");

//spile()
console.log("spilce : " + fruits.splice(2, 1, "Cherry", "Strawberry"));
console.log("array : " + fruits + "\n");