# Image Carousel

A Javascript-powered image carousel/slider. Users can slide the carousel using arrow buttons, select an image with the dot navigation below, or allow the carousel to advance automatically every 5 seconds.

[Live demo](https://gregolive.github.io/dynamic-ui-design/#img-carousel-demo) 👈

[npm package](https://www.npmjs.com/package/@gregolive/img-carousel) 📦

## Prerequisites

For icons to display, please install [font-awesome](https://www.npmjs.com/package/font-awesome).

## Installation

On the command line run:

```
npm i @gregolive/img-carousel
```

Import the function in your Javascript file with:

```
import imgCarousel from '@gregolive/img-carousel';
```

## Usage

Pass an array of images to the function. 

We recommend using webpack's [image loader](https://webpack.js.org/guides/asset-management/#loading-images) if using webpack:

```
import img1 from './img1.jpg';
import img2 from './img1.jpg';

const carousel = imgCarousel([img1, img2]);
```

Append to the DOM.

```
document.body.appendChild(carousel);
```

Default styling (colors, padding, etc.) can be overridden by overriding the CSS variables in:

```
:root {
  ...
}
```

## License

ISC