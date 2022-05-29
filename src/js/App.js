import initCarousel from './carousel';
import Slider from './Slider';
import event from './eventPage';
import yandexApi from './yandexApi';

const slider = new Slider();
initCarousel();
slider.initSlider();
event();
yandexApi();
