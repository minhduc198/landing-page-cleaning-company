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

// const navHeader = document.querySelector(".nav-header");
// const headerIntro = document.querySelector(".header-introduce");
// window.addEventListener("scroll", function () {
//   const currentScrollTop = window.pageYOffset;

//   if (currentScrollTop > 0) {
//     navHeader.classList.add("nav-header--fixed");
//     navHeader.classList.add("header-introduce--hidden");
//   } else {
//     navHeader.classList.remove("nav-header--fixed");
//     headerIntro.classList.remove("header-introduce--hidden");
//   }
// });
