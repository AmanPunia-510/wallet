let toggle_box = document.querySelector(".toggle-ball")

toggle_box.addEventListener("click", function () {
    toggle_box.classList.toggle("toggle-ball-right")
})


let menuicons = document.querySelector("#menubar")
let navlist = document.querySelector(".nav-items")

menuicons.addEventListener("click", () => {
    navlist.classList.toggle("show");
})
