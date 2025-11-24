// Buatlah variabel seperti dibawah ini

var tanggal = 17;
var bulan = 8;
var tahun = 1945;

/*
    ganti tanggal, bulan, tahun sesuai dengan tanggal lahir anda dan buatlah switch case pada bulan (casenya harus semua bulan),
    lalu munculkan stringnya dengan output seperti ini 17 Agustus 1945 (isi disesuaikan dengan tanggal lahir masing-maisng)
*/

switch (bulan) {
    case 1 :
        bulan = "Januari";
        break;
    case 2 :
        bulan = "Februari";
        break;
    case 3 :
        bulan = "Maret";
        break;
    case 4 :
        bulan = "April";
        break;
    case 5 :
        bulan = "Mei";
        break;
    case 6 :
        bulan = "Juni";
        break;
    case 7 :
        bulan = "Juli";
        break;
    case 8 :
        bulan = "Agustus";
        break;
    case 9 :
        bulan = "September";
        break;
    case 10 :
        bulan = "Oktober";
        break;
    case 11 :
        bulan = "November";
        break;
    case 12 :
        bulan = "Desember";
}

console.log(tanggal + " " + bulan + " " + tahun)