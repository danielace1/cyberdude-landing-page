const hamburgerEl = document.querySelector(".hamburger-menu-button");
const hamburgerSpanEl = document.querySelector(".hamburger-menu-button-open");

hamburgerEl.onclick = function () {
  hamburgerSpanEl.classList.toggle("hamburger-menu-button-close");
};
