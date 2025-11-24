/*
    (mengelompokkan data) jika terdapat variabel seperti dibawah ini:

    var people =[
    {name: "John", job: "Programmer", gender: "male", age: 30},
    {name: "Sarah", job: "Model", gender: "female", age: 27},
    {name: "Jack", job: "Engineer", gender: "male", age: 25},
    {name: "Ellie", job: "Designer", gender: "female", age: 35},
    {name: "Danny", job: "Footballer", gender: "male", age: 30},
    ]

    kelompokkan data laki-laki yang umurnya diatas 29 (munculkan seluruh
    datanya).
*/

var people =[
    {name: "John", job: "Programmer", gender: "male", age: 30},
    {name: "Sarah", job: "Model", gender: "female", age: 27},
    {name: "Jack", job: "Engineer", gender: "male", age: 25},
    {name: "Ellie", job: "Designer", gender: "female", age: 35},
    {name: "Danny", job: "Footballer", gender: "male", age: 30},
    ]

// munculkan data yang umurnya diatas 29
for (let i = 0; i < people.length; i++) {
    if (people[i].age>29) {
        console.log(people[i]);
    }
}