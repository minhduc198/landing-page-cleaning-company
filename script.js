const serviceDetail = document.querySelector(".service-detail");
const btnReadMore = serviceDetail.querySelector(".button-readmore");
const statementBox = serviceDetail.querySelector(".statement");

btnReadMore.addEventListener("click", () => {
  if (statementBox.classList.contains("statement")) {
    statementBox.classList.add("statement-full");
    statementBox.classList.remove("statement");
    btnReadMore.textContent = "Show less";
  } else {
    statementBox.classList.add("statement");
    statementBox.classList.remove("statement-full");
    btnReadMore.textContent = "Show more";
  }
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".header-menu");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("change");
  navMenu.classList.toggle("menu-active");
});

const flipCard = document.querySelector(".flip-card");
const btnCard = document.querySelector(".button-card");

btnCard.addEventListener("click", () => {
  flipCard.classList.add("service-front-card");
  flipCard.classList.add("service-back-card");
});
