/**
 * Swiper-SlideDelay v1.1.0 for Swiper (https://github.com/fibit/swiper-slidedelay)
 * Author Pavel Romanov
 * Released under the MIT License
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    const plugin = factory();

    module.exports = plugin;
    module.exports.SlideDelayPlugin = plugin;
    module.exports.default = plugin;
  } else if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    root.SlideDelayPlugin = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  function SlideDelayPlugin({ swiper, on }) {
    const DATA_ATTRIBUTE = 'swiperSlideDelay';
    let slidesDelays = null;
    let slideChangeHandler = null;

    const applyCurrentDelay = () => {
      if (!slidesDelays) return;

      const delay = slidesDelays[swiper.realIndex];
      if (delay === undefined || delay === swiper.params.autoplay.delay) return;

      swiper.params.autoplay.delay = delay;
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
        swiper.autoplay.start();
      }
    };

    const initSlideDelays = () => {
      if (!swiper.autoplay || !swiper.params.autoplay?.delay) return;

      const defaultDelay = swiper.params.autoplay.delay;

      slidesDelays = Array.from(swiper.slides, slide => {
        const delay = parseInt(slide.dataset[DATA_ATTRIBUTE], 10);
        return Number.isInteger(delay) ? delay : defaultDelay;
      });

      slideChangeHandler = applyCurrentDelay;
      swiper.on('slideChange', slideChangeHandler);
      applyCurrentDelay();
    };

    const cleanup = () => {
      if (slideChangeHandler) {
        swiper.off('slideChange', slideChangeHandler);
        slideChangeHandler = null;
      }
      slidesDelays = null;
    };

    on('afterInit', initSlideDelays);
    on('destroy', cleanup);
  }

  return SlideDelayPlugin;
});
