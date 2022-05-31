import {
  formValid,
} from './valid';

const logoHeader = document.querySelector('#logoHeader');
const menuItem = [...document.querySelectorAll('.menu__item')];
const section = [...document.getElementsByName('section')];
const header = document.querySelector('#home');

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

export default event;
