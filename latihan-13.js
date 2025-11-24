/*
    Pada soal ini kamu diminta untuk melakukan looping secara selang seling
    seperti contoh dibawah ini (berulang terus sampai angka 20) :
    Output:
    1 - Angka Ganjil
    2 - Angka Genap
    3 - Angka Ganjil
    4 - Angka Genap
    5 - Angka Ganjil
    ….. 
    19 - Angka Ganjil
    20 - Angka Genap
*/

a = 1;
do {
    if (a % 2 === 0){
        console.log(a + " - angka genap")
    } else {
        console.log(a + " - angka ganjil")
    }
    a++;
}
while (a <= 20);
