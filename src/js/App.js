import IMask from 'imask';
import initCarousel from './carousel';
import submitThem from './changeThem';
import Slider from './Slider';
import {
  event,
  submitBurger,
} from './eventPage';
import yandexApi from './yandexApi';
import {
  validChange,
} from './valid';

const inputTell = document.querySelector('#phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00',
};
if (inputTell) {
  const mask = IMask(inputTell, maskOptions);
}

const slider = new Slider();
if (window.screen.width <= 767) {
  slider.touchSlider();
}
if (window.screen.width <= 1023) {
  submitBurger();
}
initCarousel();
submitThem();
slider.initSlider();
validChange();
event();
yandexApi();
