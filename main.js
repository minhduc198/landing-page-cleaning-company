import btnBackFirst from "./modules/btn-back-first.js";
import ccCard from "./modules/cc-card.js";
import menu from "./modules/menu.js";
import serviceDetail from "./modules/service.js";

menu.toggleMenu();

serviceDetail.btnShowLess();

ccCard.handleOnFlip();
ccCard.handleUnFlip();

btnBackFirst.func();
