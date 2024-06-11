class BtnBackFirst {
  constructor() {
    const body = document.querySelector("body");
    this.btnBackFirst = body.querySelector(".btn-back-first");
  }

  func() {
    this.btnBackFirst.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  }
}

const btnBackFirst = new BtnBackFirst();
export default btnBackFirst;
