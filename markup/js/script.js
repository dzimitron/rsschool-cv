document.addEventListener('scroll', onscroll);

function onscroll(event) {
  const curPos = window.scrollY;
  const links = document.querySelectorAll('.navigation a');
  const anchor = document.querySelectorAll('.anchor');

  anchor.forEach((el) => {
    if (el.parentElement.offsetTop - 95 <= curPos && (el.parentElement.offsetTop -95 + (el.parentElement.offsetHeight)) > curPos) {
      links.forEach((a) => {
        a.classList.remove('active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('active');
        }
      })
    }
  })
};


const BURGER = document.querySelector('.hamburger');
const MENU = document.querySelector('.header__navigation');
const BODYLOCK = document.querySelector('body');
const LINKS = document.querySelector('.navigation');
const LOGO = document.querySelector('.logo');

BURGER.addEventListener('click', () => {
  BURGER.classList.toggle('burger');
  MENU.classList.toggle('menu_active');
  BODYLOCK.classList.toggle('lock');
  LOGO.classList.toggle('logo_active');

});

LINKS.addEventListener('click', () => {
  BURGER.classList.toggle('burger');
  MENU.classList.toggle('menu_active');
  BODYLOCK.classList.toggle('lock');
  LOGO.classList.toggle('logo_active');
});
