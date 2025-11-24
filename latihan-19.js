/*
    Tulis program Javascript sederhana yang menghasilkan sebuah subset 
    dari sebuah string dari variabel dibawah ini:
    const word = "car"
    expected output : ["c" , "ca" , "car" , "a" , "ar" , "r"]
*/

let word = "car";
const hasil = [];

for(let i=0; i<word.length; i++) {
    console.log(`Perulangan ke ${i+1} ( i = ${i} ) =============== `);

    for(let j=i; j<word.length; j++) {
        hasil.push(word.substring(i, j+1));
        console.log(`j = ${j} `);
        console.log(`substring(${i},${j+1})`);
        console.log(`Menghasilkan : ${word.substring(i, j+1)}`);
    }
}
console.log(hasil);