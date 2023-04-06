export default class ProductCard {
  elem = ''
  id = '';

  constructor(product) {
    this.id = product.id;
    const card = document.createElement('div');
    card.classList = 'card';

    const cardTop = document.createElement('div');
    cardTop.classList = 'card__top';

    const cardBody = document.createElement('div');
    cardBody.classList = 'card__body';

    const img = document.createElement('img');
    img.src = `/assets/images/products/${product.image}`;
    img.classList = 'card__image';
    img.alt = 'product';

    const span = document.createElement('span');
    span.classList = 'card__price';
    span.innerHTML = `€${product.price.toFixed(2)}`;

    const title = document.createElement('div');
    title.classList = 'card__title';
    title.innerHTML = product.name;

    const button = document.createElement('button');
    button.classList = 'card__button';
    button.type = 'button';

    button.addEventListener('click', () => {
      let event = new CustomEvent('product-add', {
        bubbles: true,
        detail:  product.id
      });

      button.dispatchEvent(event)
    });
    

    const buttonImg = document.createElement('img');
    buttonImg.src = '/assets/images/icons/plus-icon.svg';
    button.alt = 'icon';
    
    button.appendChild(buttonImg);

    cardTop.appendChild(img);
    cardTop.appendChild(span);
    cardBody.appendChild(title);
    cardBody.appendChild(button);
    card.appendChild(cardTop);
    card.appendChild(cardBody);

    this.elem = card;
  }
}