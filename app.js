const menu = document.querySelector(".search");
const navBar = document.querySelector(".nav-wrapper");

menu.addEventListener("click", function () {
  navBar.classList.toggle("hidden-nav");
});
