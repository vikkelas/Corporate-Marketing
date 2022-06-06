export default class Slider {
  constructor() {
    this.dots = document.querySelectorAll('.slider-card__dot');
    this.conteiner = document.querySelector('#slider__cont');
    this.slide = [...document.querySelectorAll('.slider__slide')];
    this.itemCard = [...document.querySelectorAll('.employee-card')];
    this.sliderItem = document.querySelector('.services__cards');
    this.sliderTouch = document.querySelector('.slider-card');
    this.viewSize = this.slide[0].clientWidth;
    this.index = 0;
    this.clone = null;
    this.active = false;
  }

  initSlider() {
    this.apendClone();
    if (this.active === false) {
      this.eventTrasition();
      this.active = true;
    }
    this.slideStart();
  }

  apendClone() {
    this.clone = this.slide[0].cloneNode(true);
    this.conteiner.appendChild(this.clone);
    this.slide = [...document.querySelectorAll('.slider__slide')];
  }

  slideStart() {
    this.conteiner.style.transition = 'transform 30s linear';
    this.conteiner.style.transform = `translateX(${-(this.viewSize)}px)`;
  }

  eventTrasition() {
    this.conteiner.addEventListener('transitionend', async () => {
      const time = () => {
        this.conteiner.style.transition = 'none';
        this.conteiner.style.transform = 'translateX(0)';
      };
      await time();
      this.slideStart();
    });
  }

  touchSlider() {
    const margin = window.getComputedStyle(this.itemCard[0], null).getPropertyValue('margin-right');
    const numberMargin = Number(margin.replace(/[^0-9\.]/g, '')) * 2;
    const widthWindow = document.body.clientWidth;
    const viewNum = 2;
    const scrollNum = 2;
    const widthItem = widthWindow / viewNum;
    let itemCount = viewNum;
    let transformCount = 0;

    this.itemCard.forEach((item) => {
      item.style.minWidth = `${widthItem - numberMargin}px`;
    });
    this.sliderTouch.addEventListener('touchmove', (e) => {
      const dif = (widthWindow / 2) > e.changedTouches[0].clientX;
      if (dif && itemCount < this.itemCard.length) {
        itemCount += scrollNum;
        transformCount -= widthItem * scrollNum;
        this.sliderItem.style.transform = `translateX(${transformCount}px)`;
        this.changeDots();
      }
      if (!dif && itemCount !== viewNum) {
        itemCount -= scrollNum;
        transformCount += widthItem * scrollNum;
        this.sliderItem.style.transform = `translateX(${transformCount}px)`;
        this.changeDots();
      }
    });
  }

  changeDots() {
    this.dots.forEach((item) => {
      item.classList.toggle('slider-card__dot--active');
    });
  }

  eventRemove() {
    this.index = 0;
    this.slide.removeChild(this.clone);
    this.slides = this.slide.querySelectorAll('.brnads__conteiner');
    this.slide.style.transition = 'none';
    this.slide.style.transform = 'translateX(0px)';
  }
}
