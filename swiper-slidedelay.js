/**
 * Swiper-SlideDelay v1.0.0 for Swiper (https://github.com/fibit/swiper-slidedelay)
 * Author Pavel Romanov
 * Released under the MIT License
 */
function SlideDelayPlugin({ swiper, on }) {
  const DATA_ATTRIBUTE = 'swiperSlideDelay';
  let slidesDelays = null;

  const initSlideDelays = () => {
    if (!swiper.autoplay || !swiper.params.autoplay?.delay) return;

    const defaultDelay = swiper.params.autoplay.delay;

    slidesDelays = Array.from(swiper.slides, slide => {
      const delay = parseInt(slide.dataset[DATA_ATTRIBUTE], 10);
      return Number.isInteger(delay) ? delay : defaultDelay;
    });

    swiper.on('slideChange', () => {
      if (slidesDelays && slidesDelays[swiper.realIndex] !== swiper.params.autoplay.delay) {
        swiper.params.autoplay.delay = slidesDelays[swiper.realIndex];
        swiper.autoplay.stop();
        swiper.autoplay.start();
      }
    });
  };

  const cleanup = () => {
    if (slidesDelays) {
      swiper.off('slideChange');
      slidesDelays = null;
    }
  };

  on('afterInit', initSlideDelays);
  on('destroy', cleanup);
}
