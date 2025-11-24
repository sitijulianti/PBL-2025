var sisi = " 1 2 ";
var jariJari = "7.5";

//Hapus seluruh spasi dari variabel sisi ke tipe data integer, lalu lakukan perhitungan luas persegi
sisi = sisi.charAt(1) + sisi.charAt(3);
let luasPersegi = Number(sisi) * Number(sisi);

console.log(luasPersegi);

//Ubahlah variabel jarijari ke tipe data float  lalu lakukan perhitungan luas lingkaran
jariJari = parseFloat(jariJari);
let luasLingkaran = 3.14 * (jariJari ** 2);

console.log(luasLingkaran);