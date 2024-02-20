const toggle = document.querySelector(".navbar__toggle");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("open");
  menu.classList.toggle("open");
});

const menu = document.querySelector(".navbar__menu");
