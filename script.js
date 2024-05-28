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
