// tidak menggunakan dom traversal

// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

// menngunakan DOM TRAVERSAL

// const close = document.querySelectorAll(".close");
// for (let i = 0; i <= close.length; i++) {
//   close[i].addEventListener("click", function (event) {
//     event.target.parentElement.style.display = "none";
//   });
// }

// cara lebih singkatnya

// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault(); //-->mencegah aksi defaultnya
//     e.stopPropagation(); // event bubbling menghentikan aksi yang dilakukan, tanpa mengenai area sekitarnya
//   });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

//event bubbling

const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
