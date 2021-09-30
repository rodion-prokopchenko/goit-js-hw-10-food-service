import './sass/main.scss';

import menu from './templates/gallery-items.hbs';

import menuItems from './menu.json';

const placeForMenuItems = document.querySelector("ul[class='menu js-menu']");
placeForMenuItems.insertAdjacentHTML('beforeend', createMenuItems(menuItems));
function createMenuItems(menuItems) {
  return menu(menuItems);
}

const buttonOfTheme = document.querySelector('#theme-switch-toggle');
buttonOfTheme.addEventListener('change', switchTheme);
// const saveThemeAfterReload = {};
function switchTheme(e) {
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  if (document.body.classList.contains(Theme.LIGHT)) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);

    let currentTheme = document.body.className;
    localStorage.setItem('theme', currentTheme);
    return;
  }

  document.body.classList.remove(Theme.DARK);
  document.body.classList.add(Theme.LIGHT);
  let currentTheme = document.body.className;
  localStorage.setItem('theme', currentTheme);
}
console.log(buttonOfTheme);
document.body.classList.add(localStorage.getItem('theme'));
