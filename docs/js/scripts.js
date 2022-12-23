const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("menu--show");
  if (menuIcon.dataset.menuIcon === "hamburger") {
    menuIcon.src = "assets/shared/mobile/close.svg";
    menuIcon.dataset.menuIcon = "close";
  } else {
    menuIcon.src = "assets/shared/mobile/menu.svg";
    menuIcon.dataset.menuIcon = "hamburger";
  }
});
