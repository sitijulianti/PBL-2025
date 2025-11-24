/*
    Buatlah looping dalam JavaScript dengan menggunakan syntax while 
    (gunakan kedua cara di while loop) sehingga menampilkan hasil seperti
    output. 
    Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk
    membuat suatu looping yang menghitung maju dan menghitung mundur. 
    Jangan lupa tampilkan di console juga judul ‘LOOPING PERTAMA’ dan 
    ‘LOOPING KEDUA’.”
*/

text1 = "LOOPING PERTAMA"
text2 = "     LOOPING KEDUA"
console.log(text1, text2)
i = 2;
a = 20;
do {
    console.log((i + "-" + "I love coding"), ("     " + a + "-" + "I will become a MERN Stack developer"))
    i += 2;
    a += -2;
}
while (i <= 20);
      (a >= 2);