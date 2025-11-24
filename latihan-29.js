/*
    (Membuat Penambahan Data object ke array melalui function)
    buatlah function tambahDataFilm yang menambahkan object ke array

    /* Tulis kode function di sini */

    var dataFilm = []

    function tambahDataFilm (judul, durasi, genre, tahun){
        dataFilm.push({judul: judul, durasi: durasi, genre: genre, tahun: tahun});
    }

    tambahDataFilm("LOTR", "2 jam", "action", "1999")
    tambahDataFilm("avenger", "2 jam", "action", "2019")
    tambahDataFilm("spiderman", "2 jam", "action", "2004")
    tambahDataFilm("juon", "2 jam", "horror", "2004")
    console.log(dataFilm)
