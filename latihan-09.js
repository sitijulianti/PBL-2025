/*
    buatlah variabel seperti dibawah ini:

    var sentence="Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";

    dari variabel sentence diatas kategorikan panjang string nya dengan kondisi jika panjang string nya kurang dari 10
    maka dikategorikan "Pendek", jika panjang antara 10 hingga 30 dikategorikan "Sedang" dam jika panjang sringnya diatas 30
    maka dikategorikan "Panjang"
*/

var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";

if (sentence.length < 10) {
  greeting = "Pendek";
} else if (sentence.length <= 30) {
  greeting = "Sedang";
} else {
  greeting = "Panjang";
}

console.log(greeting);
