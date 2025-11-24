/*
    terdapat variabel seperti dibawah ini :
    const data = [
    [1,3,5,7,8,9],
    [4,5,6,2,3,1],
    [6,7,8,1,3,5],
    ]
    jumlahkan elemen angka di dalam array dua dimensi tersebut sehingga
    menghasilkan output seperti dibawah ini:
    [33, 21, 30]
*/

const data = [
    [1,3,5,7,8,9],
    [4,5,6,2,3,1],
    [6,7,8,1,3,5],
    ];

    const hasil = [];
    console.log(data.length)

    for (let i=0; i<data.length; i++) {
        let jumlah = 0;
        for (let j=0; j<data[i].length; j++) {
            jumlah += data[i][j];
        }
        hasil.push(jumlah);
    }
    console.log(hasil);