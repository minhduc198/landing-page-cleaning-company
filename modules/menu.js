class Menu {
  constructor() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".header-menu");
    this.hamburgerMenu = hamburgerMenu;
    this.navMenu = navMenu;
  }

  toggleMenu() {
    this.hamburgerMenu.addEventListener("click", () => {
      this.hamburgerMenu.classList.toggle("change");
      this.navMenu.classList.toggle("menu-active");
    });
  }
}
const menu = new Menu();
export default menu;
