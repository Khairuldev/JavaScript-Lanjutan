// DOM MANIPULATION BY NODE

//contoh 1
//disini kita akan membuat paragraf baru, berikut tahapan - tahapannya :

//document.createElement()--> uNtuk Membuat atau menambahkan element baru kedalam html
//1. buat element baru 
const pBaru = document.createElement("p");

//document.createTextNode()--> uNtuk Membuat membuat node baru dalam bentuk text
//2.membuat node baru dalam bentuk text
const teksPbaru = document.createTextNode("Paragraf Baru");

//Node.appandChild() --> untuk menyimpan node maupun element diakhir kedalam, letaknya sudah pasti dibagian akhir element
//3. simpan tulisan kedalam paragraf
pBaru.appendChild(teksPbaru);

//4. simpan pBaru didalam section akhir, dengan cara menseleksi element di html untuk nantinya dimasukan ke dalam id
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);


//contoh 2
const libaru = document.createElement("li");
const teksItemB = document.createTextNode("item baru");
libaru.appendChild(teksItemB);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

// Node.insertBefore()--> untuk memasukan / menambahkan element baru kedalam html sebelum element dibawahnya
ul.insertBefore(libaru, li2);


//parentNode.removeChild() --> untuk meremove / menghapus element node
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

//parentNode.replaceChild() --> untuk mengganti / mengubah element node

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const elementh2 = document.createElement("h2");
const judulBaru = document.createTextNode("Judul Baru");

elementh2.appendChild(judulBaru);

sectionB.replaceChild(elementh2, p4);


pBaru.style.backgroundColor="green";
libaru.style.backgroundColor="green";
elementh2.style.backgroundColor="green";



 