export default class Slider {
  constructor() {
    this.conteiner = document.querySelector('#slider__cont');
    this.slide = [...document.querySelectorAll('.slider__slide')];
    this.sliderItem = document.querySelector('.services__cards');
    this.viewSize = this.slide[0].clientWidth;
    this.index = 0;
    this.clone = null;
    this.active = false;
    this.moveItem = document.querySelector('.employee-card');
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

  // touchSlider() {
  //   const margin = window.getComputedStyle(this.moveItem, null).getPropertyValue('margin-right');
  //   const numberMargin = Number(margin.replace(/[^0-9\.]/g, '')) * 2;
  //   const scrollRel = this.sliderItem.scrollWidth - document.body.clientWidth;
  //   const widthItem = this.moveItem.clientWidth + numberMargin;
  //   let startTouch = null;
  //   let endTouch = null;
  //   let indexMove = 0;
  //   this.sliderItem.addEventListener('touchstart', (e) => {
  //     startTouch = e.changedTouches[0].clientX;
  //   });
  //   this.sliderItem.addEventListener('touchend', (e) => {
  //     endTouch = e.changedTouches[0].clientX;
  //     if (startTouch > endTouch && indexMove > -scrollRel) {
  //       console.log(indexMove);
  //       console.log(-scrollRel);
  //       indexMove -= widthItem;
  //       this.sliderItem.style.transform = `translateX(${indexMove}px)`;
  //     }
  //   });
  //   // transform: translateX(-100 px);
  // }

  eventRemove() {
    this.index = 0;
    this.slide.removeChild(this.clone);
    this.slides = this.slide.querySelectorAll('.brnads__conteiner');
    this.slide.style.transition = 'none';
    this.slide.style.transform = 'translateX(0px)';
  }
}
