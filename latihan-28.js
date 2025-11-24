/*
    (Membuat Array of Object) anda diberikan data-data buah seperti dibawah ini

    1.nama: Nanas
    warna: Kuning
    ada bijinya: tidak
    harga: 9000

    2.nama: Jeruk
    warna: Oranye
    ada bijinya: ada
    harga: 8000

    3.nama: Semangka
    warna: Hijau & Merah
    ada bijinya: ada
    harga: 10000

    4.nama: Pisang
    warna: Kuning
    ada bijinya: tidak
    harga: 5000

    uraikan data tersebut menjadi array of object dan munculkan data yang
    tidak memiliki biji
*/

//buat array of object
const buah  = [
    {nama : "Nanas",warna : "Kuning",adabijinya : "tidak",harga : "9000"},
    {nama : "Jeruk",warna : "Oranye",adabijinya : "ada",harga : "8000"},
    {nama: "Semangka",warna: "Hijau",adabijinya: "ada",harga: "10000"},
    {nama: "Pisang",warna: "Kuning",adabijinya: "tidak",harga: "5000"}
]

//print array
console.log("daftar buah : " + buah);

//print elemen objectnya saja
for (let i = 0; i < buah.length; i++) {
    console.log(buah[i]);
}

// munculkan data yang tidak memiliki biji
for (let i = 0; i < buah.length; i++) {
    if (buah[i].adabijinya=="tidak") {
        console.log(buah[i]);
    }
}