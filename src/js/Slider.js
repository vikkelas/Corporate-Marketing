export default class Slider {
  constructor() {
    this.conteiner = document.querySelector('#slider__cont');
    this.slide = [...document.querySelectorAll('.slider__slide')];
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

  eventRemove() {
    this.index = 0;
    this.slide.removeChild(this.clone);
    this.slides = this.slide.querySelectorAll('.brnads__conteiner');
    this.slide.style.transition = 'none';
    this.slide.style.transform = 'translateX(0px)';
  }
}
