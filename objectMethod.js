//Membuat objek
const person = {
firstName: "John",
lastName: "Doe",
id: 5566,
fullName: function() {
return this.firstName + " " + this.lastName;
}
};

//Mengakses object method
name = person.fullName();

console.log(name)