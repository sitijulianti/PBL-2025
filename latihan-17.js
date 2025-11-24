/*
    Diberikan sebuah array sebagai berikut :
    const dataPeserta = ["john", "laki-laki", "programmer", "30"]
    let output = …………………….? ;
    console.log(output)
    isilah output variabel agar ketika di console.log menghasilkan text seperti
    dibawah ini (gunakan seluruh data yang ada di array dataPeserta)
    Output: 
    "Halo, nama saya john. saya laki-laki berumur 30 bekerja sebagai
    seorang programmer"
*/

const dataPeserta = ["john", "laki-laki", "programmer", "30"];

let output = "Halo, nama saya " + dataPeserta[0] + " " + "saya " + dataPeserta[1] + " " + "berumur " + dataPeserta[3] + " " +
 "bekerja sebagai seorang " + dataPeserta[2];

console.log(output);