/*
    Pada soal ini kamu diminta untuk melakukan looping dalam JavaScript 
    dengan menggunakan syntax for. Untuk membuat tantangan ini lebih
    menarik, kamu juga diminta untuk memenuhi syarat tertentu yaitu:
    SYARAT:
    A. Jika angka ganjil maka tampilkan Santai
    B. Jika angka genap maka tampilkan Berkualitas
    C. Jika angka yang sedang ditampilkan adalah kelipatan 3 DAN angka
    ganjil maka tampilkan I Love Coding.
    D. Jika angka yang sedang ditampilkan adalah kelipatan 3 DAN angka
    genap maka tampilkan ToT.

        Output:
    1 - Santai
    2 - Berkualitas
    3 - I Love Coding 
    4 - Berkualitas
    5 - Santai
    6 - ToT
    7 - Santai
    8 - Berkualitas
    9 - I Love Coding
    10 - Berkualitas
    11 - Santai
    12 - ToT
    13 - Santai
    14 - Berkualitas
    15 - I Love Coding
    16 - Berkualitas
    17 - Santai
    18 - ToT
    19 - Santai
    20 - Berkualitas
*/

a = 1;
do {
    if (a % 2 === 0 && a % 3 === 0){
        console.log(a + " - ToT")
    } else if (a % 2 === 0 && a % 3 != 0){
        console.log(a + " - Berkualitas")
    } else if (a % 2 != 0 && a % 3 != 0) {
        console.log(a + " - santai")
    } else {
        console.log(a + " - i love coding")
    }
    a++;
}
while (a <= 20);