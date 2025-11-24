/*
    Tampilkan sebuah segitiga dengan tanda pagar (#) dengan dimensi
    tinggi 7 dan alas 7. Looping boleh menggunakan syntax apa pun (while, 
    for, do while).
    Output:
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

// for (let i = 1; i <= 7; i++) {
//   console.log('#'.repeat(i));
// }

let dimensi = 7;
let hasil = "";

for(let i=0; i<dimensi; i++){
    for(let j=0; j<=i; j++) {
        hasil += "#";
    }
        hasil += "\n"   
}

console.log(hasil)

