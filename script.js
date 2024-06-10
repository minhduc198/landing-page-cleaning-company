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

const ccCard = document.querySelector(".cc-card");
const btnCards = ccCard.querySelectorAll(".button-card");

const contentCards = ccCard.querySelectorAll(".title-card");
const contentBackCards = ccCard.querySelectorAll(".back-full-content");
const frontCards = ccCard.querySelectorAll(".service-front-card");
const backCards = ccCard.querySelectorAll(".service-back-card");

function handleFlipCard(index) {
  frontCards[index].classList.add("front-card-active");
  backCards[index].classList.add("back-card-active");
  contentBackCards[index].textContent = contentCards[index].textContent;
}

function handleRemoveFlipCard(index) {
  frontCards[index].classList.remove("front-card-active");
  backCards[index].classList.remove("back-card-active");
}

btnCards.forEach((element, index) => {
  element.addEventListener("click", () => {
    handleFlipCard(index);

    btnCards.forEach((_, idx) => {
      if (idx !== index) {
        handleRemoveFlipCard(idx);
      }
    });
  });
});

backCards.forEach((element, index) => {
  element.addEventListener("click", () => handleRemoveFlipCard(index));
});
