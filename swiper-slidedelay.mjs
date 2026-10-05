var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// swiper-slidedelay.js
var require_swiper_slidedelay = __commonJS({
  "swiper-slidedelay.js"(exports, module) {
    (function(root, factory) {
      if (typeof module === "object" && module.exports) {
        const plugin2 = factory();
        module.exports = plugin2;
        module.exports.SlideDelayPlugin = plugin2;
        module.exports.default = plugin2;
      } else if (typeof define === "function" && define.amd) {
        define([], factory);
      } else {
        root.SlideDelayPlugin = factory();
      }
    })(typeof globalThis !== "undefined" ? globalThis : exports, function() {
      "use strict";
      function SlideDelayPlugin({ swiper, on }) {
        const DATA_ATTRIBUTE = "swiperSlideDelay";
        let slidesDelays = null;
        let slideChangeHandler = null;
        const applyCurrentDelay = () => {
          if (!slidesDelays) return;
          const delay = slidesDelays[swiper.realIndex];
          if (delay === void 0 || delay === swiper.params.autoplay.delay) return;
          swiper.params.autoplay.delay = delay;
          if (swiper.autoplay.running) {
            swiper.autoplay.stop();
            swiper.autoplay.start();
          }
        };
        const initSlideDelays = () => {
          if (!swiper.autoplay || !swiper.params.autoplay?.delay) return;
          const defaultDelay = swiper.params.autoplay.delay;
          slidesDelays = Array.from(swiper.slides, (slide) => {
            const delay = parseInt(slide.dataset[DATA_ATTRIBUTE], 10);
            return Number.isInteger(delay) ? delay : defaultDelay;
          });
          slideChangeHandler = applyCurrentDelay;
          swiper.on("slideChange", slideChangeHandler);
          applyCurrentDelay();
        };
        const cleanup = () => {
          if (slideChangeHandler) {
            swiper.off("slideChange", slideChangeHandler);
            slideChangeHandler = null;
          }
          slidesDelays = null;
        };
        on("afterInit", initSlideDelays);
        on("destroy", cleanup);
      }
      return SlideDelayPlugin;
    });
  }
});

// <stdin>
var import_swiper_slidedelay = __toESM(require_swiper_slidedelay());
var stdin_default = import_swiper_slidedelay.default;
var export_SlideDelayPlugin = import_swiper_slidedelay.default;
export {
  export_SlideDelayPlugin as SlideDelayPlugin,
  stdin_default as default
};
