//Membuat objek
const person = {
firstName:"John",
lastName:"Doe",
age:50, eyeColor:"blue"
}

// Membuat copy/ instance
const x = person;

// Mengubah properti age di x:
x.age = 10;

console.log(x)