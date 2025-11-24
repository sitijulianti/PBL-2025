// (Terbesar dan terkecil)

/*
    Buatlah function yang menghasilkan angka terbesar dan angka terkecil 
    dari sebuah array yang berisi data integer (gunakan variabel angka dibawah sebagai parameter)

    const angka = [2,3,1,9,12,8,9,7]

    expeted output : angka terbesar adalah 12 dan angka terkecil adalah 1
*/

const angka = [2, 3, 1, 9, 12, 8, 9, 7];

function angkaMaxMin(array) {
  // ... adalah spread operator untuk mengubah array {2, 5, 8} menjadi 2, 5, 8
  const max = Math.max(...array);
  const min = Math.min(...array);

  return `angka terbesar adalah ${max} dan angka tekecil adalah ${min}`;
}

console.log(angkaMaxMin(angka));
