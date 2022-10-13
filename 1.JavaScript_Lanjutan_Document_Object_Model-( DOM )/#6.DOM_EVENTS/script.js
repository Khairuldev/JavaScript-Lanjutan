// NB: KETIKA KITA MENGGUNAKAN EVENT HANDLER, DIA AKAN MENIMPAH EVENT YANG SUDAH DI BUAT SEBELUMNYA  
//EVENT HANDLER ELEMENT METHOD (EVENT ONCLICK)

const P3 = document.querySelector(".p3");
function ubahWarnap3() {
    P3.style.backgroundColor="blue";
}

//(EVENT MOUSEENTER & MOUSELEAVE)
const P2 = document.querySelector(".p2");
P2.addEventListener("mouseenter", function() {
    P2.style.backgroundColor="red";
});

P2.addEventListener("mouseleave", function() {
    P2.style.backgroundColor="white";
});

  
    

//addEventListener()
// NB: KETIKA KITA MENGGUNAKAN EVENTLISTENER, DIA AKAN MENJALANKAN SEMUA EVENT YANG SUDAH DI BUAT BAIK SEBELUMNYA MAUPUN SESUDAHNYA

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function() {
    const ul = document.querySelector("section#b ul");
    const li = document.createElement("li");
    const itemBaru = document.createTextNode("item baru");
    li.appendChild(itemBaru);

    ul.appendChild(li);
      
});

