class ServiceDetail {
  constructor() {
    const serviceDetail = document.querySelector(".service-detail");
    this.btnReadMore = serviceDetail.querySelector(".button-readmore");
    this.statementBox = serviceDetail.querySelector(".statement");
  }

  btnShowLess() {
    this.btnReadMore.addEventListener("click", () => {
      if (this.statementBox.classList.contains("statement")) {
        this.statementBox.classList.add("statement-full");
        this.statementBox.classList.remove("statement");
        this.btnReadMore.textContent = "Show less";
      } else {
        this.statementBox.classList.add("statement");
        this.statementBox.classList.remove("statement-full");
        this.btnReadMore.textContent = "Show more";
      }
    });
  }
}

const serviceDetail = new ServiceDetail();
export default serviceDetail;
