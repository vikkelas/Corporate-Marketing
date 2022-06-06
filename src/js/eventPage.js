import {
  formValid,
} from './valid';

const logoHeader = document.querySelector('#logoHeader');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');
const menuItem = [...document.querySelectorAll('.menu__item')];
const section = [...document.getElementsByName('section')];
const header = document.querySelector('#home');
const burger = document.querySelector('.burgerMenu');
const carousel = document.querySelector('.carouselSec');
const mobileLogo = document.querySelector('.mobile-menu__box');
const switchBtn = document.querySelector('.switch-btn');
const closeBtn = document.querySelector('.mobileMenu-close');
const modalCloswBtn = document.querySelector('#closeModal');
const modal = document.querySelector('.modalWindow');
let activeMenu = false;
let scrollDist = 0;

const eventMenu = () => {
  const scrollDistance = scrollDist;
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
};

const changeActiveMenuHome = () => {
  if (scrollDist < carousel.clientHeight) {
    menuItem.forEach((item) => {
      item.classList.remove('menu__item--active');
    });
    menuItem[0].classList.add('menu__item--active');
  }
};
const togleMenu = () => {
  activeMenu = false;
  eventMenu();
  burger.style.display = 'block';
  logoHeader.style.display = 'flex';
  switchBtn.classList.remove('switch-btn-active');
  mobileLogo.style.display = 'none';
  menuList.classList.remove('menu__list--active');
  menu.classList.remove('menu--active');
  header.classList.remove('header--mobile');
};
closeBtn.addEventListener('click', () => togleMenu());
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
      if (activeMenu) {
        togleMenu();
      }
    });
  });
};

const eventLogo = () => {
  const scrollDistance = scrollDist;
  if (scrollDistance !== 0) {
    logoHeader.style.opacity = '0';
    switchBtn.style.opacity = '0';
  } else {
    logoHeader.style.opacity = '1';
    switchBtn.style.opacity = '1';
  }
};

const submitScroll = () => {
  window.addEventListener('scroll', (e) => {
    scrollDist = window.scrollY;
    e.preventDefault();
    eventLogo();
    eventMenu();
    changeActiveMenuHome();
  });
};

const submitBurger = () => {
  burger.addEventListener('click', (e) => {
    if (!activeMenu) {
      activeMenu = true;
      burger.style.display = 'none';
      logoHeader.style.display = 'none';
      mobileLogo.style.display = 'flex';
      menuList.classList.add('menu__list--active');
      header.classList.add('header--mobile');
      menu.classList.add('menu--active');
      switchBtn.classList.add('switch-btn-active');
      eventMenu();
      changeActiveMenuHome();
    }
  });
};
const closeModal = () => {
  modalCloswBtn.addEventListener('click', (e) => {
    header.style.display = 'flex';
    modal.style.display = 'none';
  });
};
const submitForm = () => {
  const form = document.forms.feedback__form;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const validForm = formValid(formData);
    if (validForm) {
      fetch('mail.php', {
          method: 'POST',
          body: formData,
        })
        .then((res) => {
          if (res.ok) {
            form.reset();
            header.style.display = 'none';
            modal.style.display = 'flex';
            if (document.querySelector('body').classList.contains('light')) {
              modal.classList.add('modalWindow--light');
            }
            closeModal();
          }
        });
    }
  });
};

const event = () => {
  submitMenu();
  submitScroll();
  submitForm();
};

export {
  event,
  submitBurger,
};
