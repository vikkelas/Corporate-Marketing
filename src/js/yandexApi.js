/* eslint-disable no-undef */
import locationPin from '../assets/location.png';

const yandexApi = () => {
  const init = () => {
    const myMap = new ymaps.Map('map', {
      controls: [],
      center: [55.8, 37.63],
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
        iconImageSize: [95, 129],
        interactiveZIndex: true,
        zIndex: 999,
      }),
    );
  };
  ymaps.ready(init);
};

export default yandexApi;
