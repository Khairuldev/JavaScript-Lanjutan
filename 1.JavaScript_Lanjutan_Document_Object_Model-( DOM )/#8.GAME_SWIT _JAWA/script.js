//Game Swit Jawa

function getPilihanKomputer() {
    let computer = Math.random();

        if(computer < 0.34) return "gajah";
        if(computer >= 0.34 && computer <=0.67 )return "semut";
            return "orang";
}

function getHasil(computer, pelayer) {
    if (pelayer == computer) return  "SERI!"
    if (pelayer == "gajah") return  (computer == 'orang' ) ? 'MENANG!' : 'KALAH! '
    if(pelayer == "orang") return (computer == 'gajah') ? 'KALAH!' : 'MENANG! '
    if(pelayer == "semut") return (computer == 'orang') ? 'KALAH!' : 'MENANG! '
    
}
    

function putar() {
    let imgComputer = document.querySelector(".img-komputer");
    let gambar = ["gajah", "semut", "orang"];
    let i = 0;

    let waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date(). getTime() - waktuMulai > 1000 ) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute("src", "gambar/" + gambar[i++] + ".png");
        if(i == gambar.length) i = 0;
        
    }, 100)
} 



// menggunakan code1 lebih pendek

let pilihan = document.querySelectorAll("li img");
pilihan.forEach(function(pil) {
    pil.addEventListener("click", function() {
        let pilihanComp = getPilihanKomputer();
        let pilihanPlayer = pil.className;
        let hasil = getHasil(pilihanComp, pilihanPlayer);

        putar();

        setTimeout(function(){
            let imgComputer = document.querySelector(".img-komputer");
            imgComputer.setAttribute("src", "gambar/" + pilihanComp + ".png");
            
            let tampilanHasil = document.querySelector(".info");
            tampilanHasil.innerHTML = hasil; 
        }, 1000);
        
        
    });

});




















//menggunakan cara code2 

// let pXGajah = document.querySelector(".gajah");

// pXGajah.addEventListener("click", function(){
//     let pilihanComp = getPilihanKomputer();
//     let pilihanPlayer = pXGajah.className;
//     let hasil = getHasil(pilihanComp, pilihanPlayer);

//     let imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute("src", "gambar/" + pilihanComp + ".png");

//     let tampilanHasil = document.querySelector(".info");

//     tampilanHasil.innerHTML = hasil;
// });


// let pXOrang = document.querySelector(".orang");

// pXOrang.addEventListener("click", function(){
//     let pilihanComp = getPilihanKomputer();
//     let pilihanPlayer = pXOrang.className;
//     let hasil = getHasil(pilihanComp, pilihanPlayer);

//     let imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute("src", "gambar/" + pilihanComp + ".png");

//     let tampilanHasil = document.querySelector(".info");

//     tampilanHasil.innerHTML = hasil;
// });


// let pXSemut = document.querySelector(".semut");

// pXSemut.addEventListener("click", function(){
//     let pilihanComp = getPilihanKomputer();
//     let pilihanPlayer = pXSemut.className;
//     let hasil = getHasil(pilihanComp, pilihanPlayer);

//     let imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute("src", "gambar/" + pilihanComp + ".png");

//     let tampilanHasil = document.querySelector(".info");

//     tampilanHasil.innerHTML = hasil;
// });

































// tanya = true
// while(tanya){
//     // menangkap pilihan pelayer
//     let pelayer = prompt("Pilih : gajah , semut , atau orang");

//     // mengangkap pilihan Komputer
//     // membangkitkan pilihan random
//     let computer = Math.random();

//     if(computer < 0.34){
//         computer = "gajah";
//     }
//     else if(computer >= 0.34 && computer <=0.67 ){
//         computer = "semut";
//     }
//     else{
//         computer = "orang";
//     }

//     // menentukan rules
//     let hasil = ""
//     if (pelayer == computer) {
//         hasil = "seri"
//     }else if (pelayer == "gajah"){
//         hasil = (computer == 'orang' ) ? 'menang' : 'kalah '

//     //     if(computer == "semut"){
//     //         hasil = "kalah"
//     //     }else{
//     //         hasil = "menang"
//     //     }
//     // 
    
    
//      }else if(pelayer == "orang"){
//         hasil =(computer == 'gajah') ? 'kalah' : 'menang '

//         // if(computer == "gajah"){
//         //     hasil = "menang"
//         // }
//         // else{
//         //     hasil = "kalah"
//         // }
       
//     }else if(pelayer == "semut"){
//         hasil =(computer == 'orang') ? 'kalah' : 'menang '
//     }else{
//         hasil =" memasukan pilihan yang salah "
//     }
//      // tampilkan hasil
//      alert("kamu memilih : "+ pelayer + " dan komputer memilih : " + computer +"\n hasilnya " + hasil)

//      tanya = confirm("apakah kamu ingin melanjutkan permainan ?");
// }

   