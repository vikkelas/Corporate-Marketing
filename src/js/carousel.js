const state = {};
const carouselItems = [...document.querySelectorAll('.carousel__item')];

const getPos = (current, active) => {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current;
  }

  return diff;
};

const update = (newActive) => {
  const newActivePos = newActive.dataset.pos;

  const current = carouselItems.find((elem) => elem.dataset.pos == 0);
  const prev = carouselItems.find((elem) => elem.dataset.pos == -1);
  const next = carouselItems.find((elem) => elem.dataset.pos == 1);
  const first = carouselItems.find((elem) => elem.dataset.pos == -2);
  const last = carouselItems.find((elem) => elem.dataset.pos == 2);

  [current, prev, next, first, last].forEach((item) => {
    const itemPos = item.dataset.pos;
    item.dataset.pos = getPos(itemPos, newActivePos);
  });
};

const initCarousel = () => {
  carouselItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      update(e.currentTarget);
    });
  });
};

export default initCarousel;
