// DOM MANIPULATION BY ELEMENT

// METHOD InnerHTML gunanya dapat mennganti seluruh element html didalamnya

const judul = document.getElementById("judul");
judul.innerHTML="<em>Khairul Anwar Tanjung</>";

//method element.style.<properti css> --> dapat mengganti dan membuat style css didalamnya

judul.style.textAlign="center"
judul.style.color="blue";
judul.style.backgroundColor="black";

//method element.setAttribute --> dapat memanipulasi / mengelola seperti menambahkan atribut
//method element.getAttribute --> dapat memanipulasi / mengelola atribut seperti melihat/ manampilkan atribute
//method element.removeAttribute --> dapat meremove/menghapus atribut
// atribute adalah sesuatu yang menempel pada elemnt html seperti : id, class, a href, dll.

judul.setAttribute("name", "Khairul")

const a = document.querySelector("section#a a");
a.setAttribute("id", "link");


//method element.classList gunanya untuk mengelola sebuah class di html, ada beberpa method classList yang dapat di gunakan yaitu:

//method element.classList(add) --> Menambahkan sebuah atribut class kedalam html, contoh :
// const p2 = document.querySelector(".p2");
// p2.document.classList.add("label");


//method element.classList(remove)--> menghapus class, contoh:
// const p2 = document.querySelector(".p2");
// p2.document.classList.remove("label");


//method element.classList( toggle) --> jika sebuah element tidak mempunyai sebuah class tertentu maka toggle  akan menambahkan, tapi jika sebuah element sudah punya class tertentu maka toggle akan menghilangkan class tertentu tersebut, contoh:
// const p2 = document.querySelector(".p2");
// p2.document.classList.toggle("label");


//method element.classList(item)-->untuk mengetahui class tertentu yang ada di sebuah element, contoh:
// const p2 = document.querySelector(".p2");
// p2.document.classList.item("label")


//method element.classList(contains)--> untuk mengecek disebuah element apakah mempunyai class tertentu, contoh:
// const p2 = document.querySelector(".p2");
// p2.document.classList.contains("label")

//method element.classList(replace)--> untuk mengganti/mengubah class yang ada dengan yang baru,contoh :
// const p2 = document.querySelector(".p2");
// p2.document.classList.replace("label")

const p2 = document.querySelector(".p2");
