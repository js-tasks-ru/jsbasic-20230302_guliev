import createElement from '../../assets/lib/create-element.js';

{/* <div class="carousel__slide" data-id="penang-shrimp">
  <img src="/assets/images/carousel/...значение slide.image..." class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">€<!--значение slide.price--></span>
    <div class="carousel__title"><!--значение slide.name--></div>
    <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
</div> */}

export default class Carousel {
  elem;

  constructor(slides) {
    this.slides = slides;
    this.createSlides(slides);

    return this.elem;
  }

  createSlides(slides) {
    slides.forEach((slide) => {
      console.log(slide);
      this.elem = createElement(`<div class='carousel__slide' data-id=${slide.id}></div>`);
      this.putImg(this.createImg(slide.image));
      this.putCarouselCaption(this.createCarouselCaption(`€${slide.price.toFixed(2)}`, slide.name));
      console.log(this.elem);
    })
  }

  createImg(url) {
    const img = document.createElement('img');
    img.src = `/assets/images/carousel/${url}`
    img.alt = 'slide';
    img.classList = 'carousel__img'
    return img;
  }

  putImg(img) {
    this.elem.appendChild(img);
  }

  createCarouselCaption(price, title) {
    const carouselCaption = createElement(`
      <div class='carpusel__caption'>
        <span class='carousel__price'>${price}</span>
        <div class='carousel__title'>${title}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
      `);
    return carouselCaption;
  }

  putCarouselCaption(carouselCaption){
    this.elem.appendChild(carouselCaption);
  }
}
