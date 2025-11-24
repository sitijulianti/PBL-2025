// Buatlah variabel seperti dibawah ini
let nilai = 49;

/*
    pilih angka dari 0 sampai 100, misal 75. lalu isi variabel tersebut
    dengan angka tersebut. lalu buatlah pengkondisian dengan if-else if dengan kondisi sebagai berikut :
    nilai >= 80 indeksnya A
    nilai >=70 dan <80 indeksnya B
    nilai >=60 dan nilai <70 indeksnya C
    nilai >=50 dan nilai <60 indeksnya D
    nilai <50 indeksnya E
*/

if (nilai >= 80) {
    indeks = "A";
} else if (nilai >= 70) {
    indeks = "B";
} else if (nilai >= 60) {
    indeks = "C";
} else if (nilai >= 50) {
    indeks = "D";
} else {
    indeks = "E"
}

console.log(indeks);


