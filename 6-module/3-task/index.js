import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem;
  slideIndex = 0;

  constructor(slides) {
    this.slides = slides;

    this.elem = createElement(this.#carousel(slides));

    const leftBtn = this.elem.querySelector('.carousel__arrow_left');
    const rightBtn = this.elem.querySelector('.carousel__arrow_right');

    leftBtn.style.display = 'none';

    leftBtn.addEventListener('click', this.slideLeft.bind(this));
    rightBtn.addEventListener('click', this.slideRight.bind(this));

    const buttons = this.elem.querySelectorAll('.carousel__button');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const id = button.parentNode.querySelector('.carousel__title').innerHTML;
  
        const customEvent = new CustomEvent('product-add', {
          bubbles: true, 
          detail: id
        });

        console.log(customEvent);

        button.dispatchEvent(customEvent);
      })
    })
  }

  slideLeft() {
    const leftBtn = this.elem.querySelector('.carousel__arrow_left');

    if (this.slideIndex === 1) leftBtn.style.display = 'none'

    this.slideIndex--;
    if (this.slideIndex < 0) {
      this.slideIndex = this.slides.length - 1;
    }
    this.#setTransform();

    if (this.slides.length - 1 !== this.slideIndex) {
      const rightBtn = this.elem.querySelector('.carousel__arrow_right');
      rightBtn.style.display = 'block';
    }
  }

  slideRight() {
    const leftBtn = this.elem.querySelector('.carousel__arrow_left');

    if (this.slideIndex === 0) leftBtn.style.display = 'block'

    this.slideIndex++;
    if (this.slideIndex >= this.slides.length) {
      this.slideIndex = 0;
    }
    this.#setTransform();

    if (this.slides.length - 1 === this.slideIndex) {
      const rightBtn = this.elem.querySelector('.carousel__arrow_right');
      rightBtn.style.display = 'none';
    }
  }

  #carousel(slides) {
    const slide = slides.map((slide) => this.#carouselSlide(slide.image, slide.price, slide.name, slide.id))

    return (
      `
        <div class='carousel'>
            ${this.#tempateArrows()}
            <div class="carousel__inner">
              ${slide.join('').replaceAll(',', '')}
            </div>
        </div>
      `
    )
  }

  #tempateArrows() {
    return (
      `
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon" />
        </div>
      `
    )
  }

  #carouselSlide(url, price, title, id) {
    return (
      `<div class="carousel__slide" data-id="${id}">${this.#carouselImg(url)}${this.#carouselCaption(price, title, id)}</div>`
    );
  }

  #carouselImg(url) {
    return `<img src="/assets/images/carousel/${url}" class="carousel__img" alt="slide" />`
  }

  #carouselCaption(price, title, id) {
    return (
      `<div class="carousel__caption"><span class="carousel__price">€${price}</span><div class="carousel__title">${title}</div>${this.#carouselButton(id)}</div>`
    )
  }

  #carouselButton(id) {
    const button = document.createElement('button');
    button.classList = 'carousel__button';
    button.type = 'button';
  
    button.innerHTML = `<img src="/assets/images/icons/plus-icon.svg" alt="icon" />`
  
    return button.outerHTML
  }

  #setTransform() {
    const inner = this.elem.querySelector('.carousel__inner');
    const slideWidth = this.elem.querySelector('.carousel__slide').offsetWidth;
    const transformValue = -1 * this.slideIndex * slideWidth;
    inner.style.transform = `translateX(${transformValue}px)`;
  }
}