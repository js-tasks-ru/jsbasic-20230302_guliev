export default class ProductCard {
  elem;

  constructor(product) {
    const parentDiv = document.createElement('div');
  
    parentDiv.innerHTML = `
    <div class="card__top">
      <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
      <span class="card__price">€${product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
      <div class="card__title">${product.name}</div>
      <button type="button" class="card__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>
    `
  
    const button = parentDiv.querySelector('.card__button');

    button.addEventListener('click', () => {
      const customEvent = new CustomEvent('product-add', {
        bubbles: true, 
        detail: product.id
      });
      button.dispatchEvent(customEvent);
    });
  
    this.elem = parentDiv;
  }
}