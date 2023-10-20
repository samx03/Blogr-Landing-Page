const showMenu = document.querySelector(".show-ham");
const menu = document.querySelector(".links-container");

let isToggle = true;
showMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  if (isToggle) {
    showMenu.src = "./images/icon-close.svg";
  } else {
    showMenu.src = "./images/icon-hamburger.svg";
  }
  isToggle = !isToggle;
});
