class CCCard {
  constructor() {
    const ccCard = document.querySelector(".cc-card");
    this.btnCards = ccCard.querySelectorAll(".button-card");
    this.contentCards = ccCard.querySelectorAll(".title-card");
    this.contentBackCards = ccCard.querySelectorAll(".back-full-content");
    this.frontCards = ccCard.querySelectorAll(".service-front-card");
    this.backCards = ccCard.querySelectorAll(".service-back-card");
  }

  handleAddFlipCard(index) {
    this.frontCards[index].classList.add("front-card-active");
    this.backCards[index].classList.add("back-card-active");
    this.contentBackCards[index].textContent =
      this.contentCards[index].textContent;
  }

  handleRemoveFlipCard(index) {
    this.frontCards[index].classList.remove("front-card-active");
    this.backCards[index].classList.remove("back-card-active");
  }

  handleOnFlip() {
    this.btnCards.forEach((element, index) => {
      element.addEventListener("click", () => {
        this.handleAddFlipCard(index);

        this.btnCards.forEach((_, idx) => {
          if (idx !== index) {
            this.handleRemoveFlipCard(idx);
          }
        });
      });
    });
  }

  handleUnFlip() {
    this.backCards.forEach((element, index) => {
      element.addEventListener("click", () => this.handleRemoveFlipCard(index));
    });
  }
}

const ccCard = new CCCard();
export default ccCard;
