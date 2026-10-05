# Swiper-SlideDelay
Small plugin for [Swiper](https://github.com/nolimits4web/swiper).
Adds dynamic slide transition delays.

## Demo
:point_right: https://codesandbox.io/p/sandbox/swiper-slidedelay-zv6wjj

## How use

#### 1. Include Swiper
See https://swiperjs.com/get-started#installation

#### 2. Include SlideDelay:
Pull-in a latest version with NPM:
```
npm i swiper-slidedelay
```
and import it (ESM build `swiper-slidedelay.mjs`):
```js
import SlideDelayPlugin from 'swiper-slidedelay';
```
or require it (CommonJS):
```js
const SlideDelayPlugin = require('swiper-slidedelay');
```
or provide <script> to the required:
```html
<script src="/path/to/swiper-slidedelay.min.js"></script>
```
or use CDN:
```html
<script src="https://cdn.jsdelivr.net/gh/fibit/swiper-slidedelay@main/swiper-slidedelay.min.js"></script>
```

#### 3. Add Swiper HTML Layout:
```html
<div class="swiper mySwiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide" data-swiper-slide-delay="1000">Slide 1 (1s)</div>
    <div class="swiper-slide">Slide 2 (default 3s)</div>
    <div class="swiper-slide" data-swiper-slide-delay="5000">Slide 3 (5s)</div>
    ...
  </div>
</div>
```

#### 4. Initialize Swiper with SlideDelay:
```js
const swiper = new Swiper('.mySwiper', {
  modules: [SlideDelayPlugin],
  autoplay: {
    delay: 3000, // default delay
  },
});
```

## Key Features
- Each slide can have a custom delay using the `data-swiper-slide-delay` attribute
- Works with Swiper's autoplay functionality

## Behavior Notes
- Ensure Swiper's autoplay is enabled for the plugin to work
- If no custom delay is specified for a slide, the default `autoplay.delay` value will be used
