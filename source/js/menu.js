'use strict';

const showMenu = () => {
  const mainNav = document.querySelector(`.main-nav`);
  const mainNavToggle = mainNav.querySelector(`.main-nav__toggle`);

  mainNav.classList.remove(`main-nav--no-js`);

  mainNavToggle.addEventListener(`click`, () => {
    mainNavToggle.classList.toggle(`main-nav__toggle--opened`);
    mainNavToggle.classList.toggle(`main-nav__toggle--closed`);
  });
};

showMenu();
