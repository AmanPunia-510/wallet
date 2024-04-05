const toggle_box = document.querySelector(".toggle-ball");
const toggle_ball = document.querySelector(".toggle-ball");
toggle_box.addEventListener("click", function () {
  toggle_ball.classList.toggle("toggle-ball-right");
});

let menuicons = document.querySelector("#menubar");
let navlist = document.querySelector(".nav-items");

menuicons.addEventListener("click", () => {
  navlist.classList.toggle("show");
});
