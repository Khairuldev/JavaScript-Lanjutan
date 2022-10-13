
// kasus 1 Mengubah warna tulisan

const button = document.getElementById("tUbahWarna");
const h1 = document.getElementsByTagName("h1")[0];


button.addEventListener("click", function(){
    h1.classList.toggle("ubahWarna")
});



//kasus 2 mengubah warna bacground secara random
const tombolBaru = document.createElement("button");
const acakWarna = document.createTextNode("Ganti Warna Background");

tombolBaru.appendChild(acakWarna);

tombolBaru.setAttribute("type", "button");
button.after(tombolBaru);

tombolBaru.addEventListener("click", function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = "rgb("+ r + " "+ g + " "+ b + ")";
});


//kasus 3 membuat range warna

const rangeMerah = document.querySelector("input[name=RangeMerah]");
const rangeHijau = document.querySelector("input[name=RangeHijau]");
const rangeBiru = document.querySelector("input[name=RangeBiru]");


rangeMerah.addEventListener("input", function(){
    const merah = rangeMerah.value;
    const hijau = rangeHijau.value;
    document.body.style.backgroundColor="rgb(" + merah + "," + hijau + ", 100 )";
});


rangeHijau.addEventListener("input", function(){
    const merah = rangeMerah.value;
    const hijau = rangeHijau.value;
    document.body.style.backgroundColor="rgb(" + merah + "," + hijau + ", 100 )";
});



rangeBiru.addEventListener("input", function(){
    const merah = rangeMerah.value;
    const hijau = rangeHijau.value;
    const biru = rangeBiru.value;
    document.body.style.backgroundColor="rgb(" + merah + "," + hijau + "," + biru + ")";
});




//kasus 4 mengubah warna dengan mouse bergerak

document.body.addEventListener("mousemove", function(e){
    //posisi mouse
    // console.log(e.clientY);
    // ukuran Browser
    // console.log(window.innerWidth);

    const Xpos = Math.round((e.clientX / window.innerWidth) * 255);
    const Ypos = Math.round((e.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor="rgb("+ Xpos +", "+ Ypos +", 100)"
})

