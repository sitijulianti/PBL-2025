const date = new Date();

//getFullyear() - Menghasilkan 4 digit tahun
let tahun = date.getFullYear();
console.log(tahun);

//getMonth() - Menghasilkan (0-11)
let bulan = date.getMonth();
console.log(bulan);

//getDate() - Menghasilkan (1-31)
let tgl = date.getDate();
console.log(tgl);

//getDay() - Menghasilkan (0-6)
let hari = date.getDay();
console.log(hari);

//getHours() - Menghasilkan (0-23)
let jam = date.getHours();
console.log(jam);

//getMinutes() - Menghasilkan (0-59)
let menit = date.getMinutes();
console.log(menit);

//getSeconds() - Menghasilkan (0-59)
let detik = date.getSeconds();
console.log(detik);