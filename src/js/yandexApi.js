/* eslint-disable no-undef */
import locationPin from '../assets/location.png';

const coorCenter = {
  desctop: [55.8, 37.63],
  laptop: [55.8, 37.6315],
  tablet: [55.8, 37.6325],
  phone: [55.8025, 37.6365],
};

const icon = {
  noPhone: [95, 129],
  phone: [25, 29],
};
const state = {
  coordMap: null,
  icon: null,
};

if (window.screen.width >= 1440) {
  state.coordMap = coorCenter.desctop;
  state.icon = icon.noPhone;
}
if (window.screen.width >= 1024 && window.screen.width < 1439) {
  state.coordMap = coorCenter.laptop;
  state.icon = icon.noPhone;
}
if (window.screen.width >= 768 && window.screen.width < 1023) {
  state.coordMap = coorCenter.tablet;
  state.icon = icon.noPhone;
}
if (window.screen.width <= 767) {
  state.coordMap = coorCenter.phone;
  state.icon = icon.phone;
}
const yandexApi = () => {
  const init = () => {
    const myMap = new ymaps.Map('map', {
      controls: [],
      center: state.coordMap,
      yandexMapDisablePoiInteractivity: true,
      zoom: 16,
    }, {
      restrictMapArea: true,
      yandexMapDisablePoiInteractivity: true,

    });
    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('drag');
    myMap.behaviors.disable('dblClickZoom');
    myMap.geoObjects.add(
      new ymaps.Placemark([55.800716, 37.636552], {}, {
        iconLayout: 'default#image',
        iconImageHref: locationPin,
        iconImageSize: state.icon,
        interactiveZIndex: true,
        zIndex: 999,
      }),
    );
  };
  ymaps.ready(init);
};

export default yandexApi;
