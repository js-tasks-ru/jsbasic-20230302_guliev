import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem;

  constructor(slides) {
    this.elem = createElement(this.#carousel(slides));
    const leftBtn = document.querySelector('carousel__arrow_right');
  }

  #carousel(slides) {
    const slide = slides.map((slide) => this.#carouselSlide(slide.image, slide.price, slide.name))

    return (
      `
        <div class='carousel'>
            ${this.#tempateArrows()}
            <div class="carousel__inner">
              ${slide.join(',').replaceAll(',')}
            </div>
        </div>
      `
    )
  }
  
  #tempateArrows() {
    return (
      `<div class="carousel__arrow carousel__arrow_right"><img src="/assets/images/icons/angle-icon.svg" alt="icon"></div><div class="carousel__arrow carousel__arrow_left"><img src="/assets/images/icons/angle-left-icon.svg" alt="icon" /></div>`
    )
  }

  #carouselSlide(url, price, title) {
    return (
      `<div class="carousel__slide" data-id="penang-shrimp">${this.#carouselImg(url)}${this.#carouselCaption(price, title)}</div>`
    );
  }

  #carouselImg(url) {
    return `<img src="/assets/images/carousel/${url}" class="carousel__img" alt="slide" />`
  }

  #carouselCaption(price, title) {
    return (
      `<div class="carousel__caption"><span class="carousel__price">€${price}</span><div class="carousel__title">${title}</div>${this.#carouselButton()}</div>`
    )
  }

  #carouselButton() {
    const button = document.createElement('button');
    button.classList = 'carousel__button';
    button.type = 'button';

    button.innerHTML = `<img src="/assets/images/icons/plus-icon.svg" alt="icon" />`

    button.addEventListener('click', () => {
      let event = new CustomEvent('product-add', {
        bubbles: true,
        detail: product.id
      });

      button.dispatchEvent(event)
    });

    return button.outerHTML;
  }
}
