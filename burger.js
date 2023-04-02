const burgerMenu = document.querySelector('.burger-menu');
const navigationMenu = document.querySelector('.navigation-menu');

burgerMenu.addEventListener('click', () => {
  navigationMenu.classList.toggle('active');
  burgerMenu.classList.toggle('click');
});