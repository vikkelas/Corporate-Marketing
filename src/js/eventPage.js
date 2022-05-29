const logoHeader = document.querySelector('#logoHeader');
const menuItem = [...document.querySelectorAll('.menu__item')];
const section = [...document.getElementsByName('section')];
const header = document.querySelector('#home');
const indexScrollActive = true;

const submitMenu = () => {
  menuItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.classList.contains('menu__link')) {
        if (e.target.dataset.id === 'home') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
        document.querySelector(`#${e.target.dataset.id}`).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
};
// scroll
const submitScroll = () => {
  window.addEventListener('scroll', (e) => {
    e.preventDefault();
    const scrollDistance = window.scrollY;
    if (indexScrollActive) {
      if (scrollDistance !== 0) {
        logoHeader.style.opacity = '0';
      } else {
        logoHeader.style.opacity = '1';
      }
      section.forEach((el, i) => {
        if (el.offsetTop - header.clientHeight <= scrollDistance) {
          menuItem.forEach((el) => {
            if (el.classList.contains('menu__item--active')) {
              el.classList.remove('menu__item--active');
            }
          });
          menuItem[i].classList.add('menu__item--active');
        }
      });
    }
  });
};

const event = () => {
  submitMenu();
  submitScroll();
};

export default event;
