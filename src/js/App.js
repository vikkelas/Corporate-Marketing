import IMask from 'imask';
import initCarousel from './carousel';
import Slider from './Slider';
import event from './eventPage';
import yandexApi from './yandexApi';
import {
  validChange,
} from './valid';

const inputTell = document.querySelector('#phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00',
};
const mask = IMask(inputTell, maskOptions);
const slider = new Slider();
// if (window.screen.width <= 767) {
//   slider.touchSlider();
// }
initCarousel();
slider.initSlider();
validChange();
event();
yandexApi();
