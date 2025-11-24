//Membuat fungsi untuk membuat objek person (konstruktor)
function Person(first, last, age) {
this.firstName = first;
this.lastName = last;
this.age = age;}
//Membuat objek lain
const mySelf = new Person("Johnny", "Rally", 22);
//Menambah properti ke objek
mySelf.nationality = "Indonesia";
//Menambah properti ke konstruktor
mySelf.nationality = "Indonesia";
Person.prototype.nationality = "English";

console.log("person : " + Person + " myself: " + mySelf)