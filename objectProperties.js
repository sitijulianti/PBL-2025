// membuat object person
const person = {
    firstName: "John",
    lastName: "Doe",
    age: "50"
};

console.log(person);

// mengakses object dengan objectName.property
console.log(person.firstName + " is " + person.age + " years old.");

//mengakses object dengan objectName["property"]
console.log(person["firstName"] + " is " + person["age"] + " years old.");

//mengakses object dengan objectName[expression]
let x = "firstName";
let y = "age";
console.log(person[x] + " is " + person[y] + " years old.");


