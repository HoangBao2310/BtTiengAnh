var navbar = document.querySelector(".nav-bar");
navbar.addEventListener("click", function () {
    document.querySelector(".nav-menu").classList.add("active");
})

var closeNav = document.querySelector(".nav-menu .fa-xmark");
closeNav.addEventListener("click", function () {
    document.querySelector(".nav-menu").classList.remove("active");
})