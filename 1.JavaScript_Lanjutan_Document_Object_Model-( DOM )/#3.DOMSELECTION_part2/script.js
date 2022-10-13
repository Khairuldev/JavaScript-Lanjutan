//DOM SELECTION
// document.getElementById() --> mengembalikan element

// const judul = document.getElementById("judul"); //nama variabel dan id boleh tidak sama 

// judul.style.color="red";
// judul.style.backgroundColor="blue";
// judul.innerHTML="Hallo Khairul Anwar Tanjung";

// document.getElementsByName() --> MengembaLikaN HTMLColection

// const p = document.getElementsByTagName("p");


// for (let i = 0; i <= p.length; i++) {
//     if(i === 0){
//         p[i].style.backgroundColor="black",
//         p[i].style.color="white";
//     }else if(i === 1){
//         p[i].style.backgroundColor="green",
//         p[i].style.color="yellow";
//     }else if(i === 2){
//         p[i].style.backgroundColor="red",
//         p[i].style.color="balck";
//     }else if(i === 3){
//         p[i].style.backgroundColor="purple";
//         p[i].style.color="orange";
//     }
    
// }



// const h1 = document.getElementsByTagName("h1")[0];

// h1.style.textAlign="center";
// h1.style.textDecoration="underline";
// h1.style.textDecorationColor="yellow";


// document.getElementsByClassName() --> Mengembaika HTMLColection

// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "PARAGRAF 1";

// const p2 = document.getElementsByClassName("p2")[0];
// p2.innerHTML = "PARAGRAF 2";

// const p3 = document.getElementsByClassName("p3")[0];
// p3.innerHTML = "PARAGRAF 3";


// document.querySelector(); --> Element

// const p4 = document.querySelector("#b p");

// p4.style.color="green";

const li2 = document.querySelector("section#b ul li:nth-child(2)");

li2.style.backgroundColor = "orange";


// document.querySelectorAll()--> NodeList

const p = document.querySelectorAll("p");
for (let i = 0; i <= p.length; i++) {
        if(i === 0){
            p[i].style.backgroundColor="black",
            p[i].style.color="white";
        }else if(i === 1){
            p[i].style.backgroundColor="green",
            p[i].style.color="yellow";
        }else if(i === 2){
            p[i].style.backgroundColor="red",
            p[i].style.color="balck";
        }
        
    }


    //scelction by root mempersempit scope penariannya

    const sectionB = document.querySelector("section#b");
    const p4 = sectionB.getElementsByTagName("p");

    p4[0].style.color="brown";

    
