import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');
    this.render();
  }

  render() {
    const ribbonInner = document.createElement('nav');
    ribbonInner.classList.add('ribbon__inner');
    for (const category of this.categories) {
      const ribbonItem = document.createElement('a');
      ribbonItem.href = '#';
      ribbonItem.classList.add('ribbon__item');
      ribbonItem.textContent = category.name;
      ribbonItem.dataset.id = category.id;
      ribbonItem.addEventListener('click', (event) => this.onItemClick(event));
      ribbonInner.appendChild(ribbonItem);
    }
    this.elem.appendChild(this.createArrow('ribbon__arrow_left'));
    this.elem.appendChild(ribbonInner);
    this.elem.appendChild(this.createArrow('ribbon__arrow_right'));
    ribbonInner.addEventListener('scroll', () => this.onScroll(ribbonInner));
  }

  createArrow(className) {
    const arrow = document.createElement('button');
    arrow.classList.add(className, 'ribbon__arrow');
    arrow.addEventListener('click', () => this.onArrowClick(className));
    return arrow;
  }

  onArrowClick(className) {
    const ribbonInner = this.elem.querySelector('.ribbon__inner');
    const scrollStep = 350;
    if (className === 'ribbon__arrow_right') {
      ribbonInner.scrollBy(scrollStep, 0);
    } else {
      ribbonInner.scrollBy(-scrollStep, 0);
    }
  }

  onScroll(ribbonInner) {
    const arrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    const arrowRight = this.elem.querySelector('.ribbon__arrow_right');
    const scrollLeft = ribbonInner.scrollLeft;
    const scrollWidth = ribbonInner.scrollWidth;
    const clientWidth = ribbonInner.clientWidth;
    const scrollRight = scrollWidth - scrollLeft - clientWidth;
    if (scrollLeft === 0) {
      arrowLeft.classList.remove('ribbon__arrow_visible');
    } else {
      arrowLeft.classList.add('ribbon__arrow_visible');
    }
    if (scrollRight === 0) {
      arrowRight.classList.remove('ribbon__arrow_visible');
    } else {
      arrowRight.classList.add('ribbon__arrow_visible');
    }
  }

  onItemClick(event) {
    event.preventDefault();
    const ribbonItems = this.elem.querySelectorAll('.ribbon__item');
    for (const ribbonItem of ribbonItems) {
      ribbonItem.classList.remove('ribbon__item_active');
    }
    const currentItem = event.currentTarget;
    currentItem.classList.add('ribbon__item_active');
    this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
      detail: currentItem.dataset.id,
      bubbles: true
    }));
  }
}