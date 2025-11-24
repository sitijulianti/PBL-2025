// var pertama = "saya";
// var kedua = "senang";
// var ketiga = "belajar";
// var keempat = "javascript";

// //gabungkan variabel-variabel tersebut agar menghasilkan output: Saya SenanG BelajaR JAVASCRIPT

// //cara pertama

// var satu = pertama.charAt(0).toUpperCase() + pertama.slice(1);

// var dua = kedua.charAt(0).toUpperCase() + kedua.slice(1,5) + kedua.charAt(5).toUpperCase();

// var tiga = ketiga.charAt(0).toUpperCase() + ketiga.slice(1,6) + ketiga.charAt(6).toUpperCase();

// var empat = keempat.toUpperCase (0);

// console.log(" " + satu + " " + dua + " " + tiga + " " + empat);

//cara kedua

let pertama = "saya";
let kedua = "senang";
let ketiga = "belajar";
let keempat = "javascript";

pertama = (pertama[0].toUpperCase()) + pertama.substring(1);
kedua = (kedua[0].toUpperCase()) + (kedua.substring(1,((kedua.length)-1))) + (kedua[(kedua.length-1)].toUpperCase());
ketiga = (ketiga[0].toUpperCase()) + (ketiga.substring(1,((ketiga.length)-1))) + (ketiga[(ketiga.length-1)].toUpperCase());
keempat = keempat.toUpperCase();

console.log(`${pertama} ${kedua} ${ketiga} ${keempat}`);
