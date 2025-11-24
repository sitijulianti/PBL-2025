/*
    (intoduce) Tulislah sebuah function dengan nama introduce() yang memproses parameter yang dikirim menjadi sebuah kalimat
*/

function introduce(nama, jenis_kelamin, profesi, usia) {
//   let panggilan;
//   if (jenis_kelamin == "laki-laki") {
//     panggilan = "Pak";
//   } else {
//     panggilan = "Bu";
//   }
//   return panggilan + " " + nama + " adalah seorang " + profesi + " yang berusia " + usia;

// (kondisi ? true : false)
    return (jenis_kelamin=="laki-laki" ? "Pak " : "Bu ") + nama + " adalah seorang " + profesi + " yang berusia " + usia + "tahun"
 }

let john = introduce("john", "laki-laki", "penulis", "30");
console.log(john); // menampilkan "pak john adalah seorang penulis yang berusia 30 tahun"

let sarah = introduce("sarah", "perempuan", "model", "28")
console.log(sarah) // menampilkan "Bu sarah adalah seorang model yang berusia 28 tahun"
