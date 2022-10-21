const linkMenu = document.querySelector(".link-menu");
const header = document.querySelector("header");
const linkCloseMenu = document.querySelector(".close-menu");

linkMenu.addEventListener("click", (event) => {
  event.preventDefault();

  header.classList.toggle("menu-open");
});

linkCloseMenu.addEventListener("click", (event) => {
  event.preventDefault();

  header.classList.toggle("menu-open");
});
