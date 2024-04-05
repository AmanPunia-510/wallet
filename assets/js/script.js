const toggle_box = document.querySelector(".toggle-box");
const toggle_ball = document.querySelector(".toggle-ball");

toggle_box.addEventListener("click", () => {
    toggle_ball.classList.toggle("toggle-ball-right");
})

let menuicons = document.querySelector("#menubar");
let navlist = document.querySelector(".nav-items");

menuicons.addEventListener("click", () => {
  navlist.classList.toggle("show");
});
