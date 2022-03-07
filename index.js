// Load CSS
import './style.css';

// Carousel functionality

let slideIndex = 1;

const showSlides = (n) => {
  const slides = document.querySelectorAll('.img-slide');
  const dots = document.querySelectorAll('.dot');

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i += 1) {
    slides[i].classList.remove('active');
  }
  for (let i = 0; i < dots.length; i += 1) {
    dots[i].classList.remove('active');
  }

  slides[slideIndex - 1].classList.add('active');
  dots[slideIndex - 1].classList.add('active');
};

const slideLeft = () => {
  showSlides(slideIndex -= 1);
};

const slideRight = () => {
  showSlides(slideIndex += 1);
};

const setSlide = (i) => {
  showSlides(slideIndex = i + 1);
};

let autoscroll = window.setInterval(slideRight, 5000);

const resetAutoScroll = () => {
  window.clearInterval(autoscroll);
  autoscroll = window.setInterval(slideRight, 5000);
};

// Build carousel elements

const imgSlide = (image, index) => {
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');

  img.src = image;

  imgContainer.className = (index === 0) ? 'img-slide active' : 'img-slide';
  imgContainer.appendChild(img);

  return imgContainer;
};

const navArrow = (name) => {
  const arrow = document.createElement('a');
  const arrowIcon = document.createElement('i');

  arrowIcon.className = `fa-solid fa-caret-${name}`;

  arrow.className = `nav-arrow nav-arrow-${name}`;
  arrow.appendChild(arrowIcon);

  if (name === 'left') {
    arrow.addEventListener('click', () => {
      slideLeft();
      resetAutoScroll();
    });
  } else {
    arrow.addEventListener('click', () => {
      slideRight();
      resetAutoScroll();
    });
  }
  return arrow;
};

const navDots = (imgCount) => {
  const dotContainer = document.createElement('div');
  dotContainer.className = 'nav-dots';

  for (let i = 0; i < imgCount; i += 1) {
    const span = document.createElement('span');
    span.className = (i === 0) ? 'dot active' : 'dot';
    span.addEventListener('click', () => {
      setSlide(i);
      resetAutoScroll();
    });
    dotContainer.appendChild(span);
  }

  return dotContainer;
};

const imgCarousel = (images) => {
  const slideshowContainer = document.createElement('div');
  const carouselSection = document.createElement('section');

  slideshowContainer.className = 'slideshow-container';
  images.forEach((image, index) => slideshowContainer.appendChild(imgSlide(image, index)));
  slideshowContainer.appendChild(navArrow('left'));
  slideshowContainer.appendChild(navArrow('right'));

  carouselSection.appendChild(slideshowContainer);
  carouselSection.appendChild(navDots(images.length));

  return carouselSection;
};

export default imgCarousel;
