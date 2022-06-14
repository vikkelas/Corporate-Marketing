const btnSwitch = document.querySelector('.switch-btn');
const body = document.querySelector('body');
const menu = document.querySelector('.menu__list');
const carousel = document.querySelectorAll('.carousel__item');
const title = document.querySelectorAll('.title');
const subTitle = document.querySelectorAll('.subtitle');
const boxMain = document.querySelectorAll('.box-main');
const employeeCard = document.querySelectorAll('.employee-card');
const contacts = document.querySelector('.contacts__main');
const mapBackground = document.querySelector('.contacts__background');
const footer = document.querySelector('.footer');
const mobile = document.querySelector('.carouselSec');
const gradientBtn = document.querySelectorAll('.gradient-btn');

const submitThem = () => {
  let them = 'dark';
  btnSwitch.addEventListener('click', (e) => {
    them !== 'dark' ? them = 'dark' : them = 'light';
    e.currentTarget.classList.toggle('switch-btn--on');
    body.classList.toggle('light');
    mobile.classList.toggle('carousel--light');
    menu.classList.toggle('light-menu');
    footer.classList.toggle('footer--light');
    contacts.classList.toggle('contacts__main--light');
    mapBackground.classList.toggle('contacts__background--light');
    employeeCard.forEach((item) => {
      if (them === 'dark') {
        item.classList.remove('employeeCard-light');
      }
      if (them === 'light') {
        item.classList.add('employeeCard-light');
      }
    });
    gradientBtn.forEach((item) => {
      if (them === 'dark') {
        item.classList.remove('gradient-btn--light');
      }
      if (them === 'light') {
        item.classList.add('gradient-btn--light');
      }
    });
    subTitle.forEach((item) => {
      if (them === 'dark') {
        item.classList.remove('subtitle--light');
      }
      if (them === 'light') {
        item.classList.add('subtitle--light');
      }
    });
    boxMain.forEach((item) => {
      if (them === 'dark') {
        item.classList.remove('boxmain-light');
      }
      if (them === 'light') {
        item.classList.add('boxmain-light');
      }
    });
    carousel.forEach((item) => {
      if (them === 'dark') {
        item.classList.remove('carousel__item-light');
      }
      if (them === 'light') {
        item.classList.add('carousel__item-light');
      }
    });
    title.forEach((item) => {
      if (them === 'dark') {
        item.classList.remove('title--light');
      }
      if (them === 'light') {
        item.classList.add('title--light');
      }
    });
  });
};

export default submitThem;
