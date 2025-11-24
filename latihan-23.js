//karakter unik

/*
    Buatlah function yang menerima parameter berupa string (gunakan variabel text dibawah sebagai parameter)
    yang mencari karakter atau huruf yang tidak berulang

    expeted output : rbmfkdv0
*/

let text = "Super Bootcamp Fullstack Dev 2022"

function karakterUnik (text) {
    //aku suka roti
    let kalimat = text.toLowerCase();
    let hasil = "";
    for (let i=0; i<text.length; i++) {
        let huruf = text[i];
        //hitung jumlah kemunculan
        let jumlah = kalimat.split(kalimat[i]).length - 1;
        //"aku suka roti".split(`a`)
        //["", "ku suk", "roti"]
        //length = 3 --> jumlah kemunculan 'a' = 3 - 1 = 2
        if (jumlah == 1) {
            hasil += huruf;
        }
    }
    return hasil.toLowerCase();
}

console.log(karakterUnik(text));