// tidak menggunakan dom traversal

// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function () {
//   card.style.display = "none";
// });

// menngunakan DOM TRAVERSAL

const close = document.querySelectorAll(".close");
// for (let i = 0; i <= close.length; i++) {
//   close[i].addEventListener("click", function (event) {
//     event.target.parentElement.style.display = "none";
//   });
// }

// cara lebih singkatnya

close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});
