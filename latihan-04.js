// menyusun kata menjadi kalimat
// terdapat kumpulan variabel dengan data string sebagai berikut :

var perkenalan = "Nama saya adalah";
var nama = " Siti Julianti";
var kata1 = " saya";
var kata2 = " berharap";
var kata3 = " untuk";
var kata4 = " menjadi";
var kata5 = " seorang";
var kata6 = " software";
var kata7 = " developer";

/* 
    Gabungkan kata-kata di atas menjadi satu kalimat perkenalan lalu dilanjutkan dengan harapan,
    Contoh output : (jika nama diisi "Abduh"): "Nama saya adalah abduh, saya berharap untuk menjadi
    seorang software developer".
*/

// cara 1
console.log (perkenalan + nama + kata1 + kata2 + kata3 + kata4 + kata5 + kata6 + kata7);

//cara 2
var hasil = " " + perkenalan + " " + nama + " " + kata1 + " " + kata2 + " " + kata3 + " " + kata4 + " " + kata5 + " " + kata6 + " " + kata7 
console.log(hasil)

//cara 3
var hasil2 = perkenalan.concat ( " " + nama + " " + kata1 + " " + kata2 + " " + kata3 + " " + kata4 + " " + kata5 + " " + kata6 + " " + kata7)
console.log(hasil2)