/*
    buatlah variabel seperti di bawah ini
    const sayuran=[ ]
    - tambahkanlah data di bawah ini ke variabel sayuran ( gunakanlah
    method menambahkan nilai di belakang elemen terakhir di array ) :
    Kangkung
    Bayam
    Buncis
    Kubis
    Timun
    Seledri
    Tauge
    - lalu urutkan ( gunakanlah method ) berdasarkan alfabet
    - lalu tampilkan dengan perulangan for.
    - beri angka di depannya sehingga menghasilkan output seperti contoh
    dibawah ini:
    1.Bayam
    2.Buncis
    3.Kangkung
    4.Kubis
    5.Seledri
    6.Tauge
    7.Timun
*/

const sayuran = []
sayuran.push("Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge");
sayuran.sort();

for(let i=0; i<sayuran.length; i++) {
    console.log(i+1 + ", " + sayuran[i]);
}