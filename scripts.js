var menu = document.querySelector(".burger-menu");
var navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("burger-menu--open");
  if (menu.classList.contains("burger-menu--open")) {
    navbar.classList.add("navbar--show");
  } else {
    navbar.classList.remove("navbar--show");
  }
});
