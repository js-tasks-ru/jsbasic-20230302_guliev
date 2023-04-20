import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  #elem;
  #titleElem;
  #bodyElem;
  #closeBtn;

  constructor() {
    this.render();

    this.#closeBtn.addEventListener('click', () => this.close());
    this.#elem.addEventListener('click', (event) => this.onClick(event));
    document.addEventListener('keydown', (event) => this.onDocumentKeyDown(event));
  }

  render() {
    this.#elem = document.createElement('div');
    this.#elem.classList.add('modal');
    this.#elem.innerHTML = `
      <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
          <h3 class="modal__title"></h3>
        </div>
        <div class="modal__body"></div>
      </div>
    `;
    this.#titleElem = this.#elem.querySelector('.modal__title');
    this.#bodyElem = this.#elem.querySelector('.modal__body');
    this.#closeBtn = this.#elem.querySelector('.modal__close');
  }

  getElement(ref) {
    const element = this.#elem.querySelector(`.modal__${ref}`);
    if (!element) {
      throw new Error(`"${ref}" element not found`);
    }
    return element;
  }

  open() {
    document.body.append(this.#elem);
    document.body.classList.add('is-modal-open');
    this.#closeBtn.focus();
  }

  onClick(event) {
    if (event.target.closest('.modal__close')) {
      event.preventDefault();
      this.close();
    }
  }

  onDocumentKeyDown(event) {
    if (event.code === 'Escape') {
      event.preventDefault();
      this.close();
    }
  }

  setTitle(title) {
    this.#titleElem.textContent = title;
  }

  setBody(node) {
    this.#bodyElem.innerHTML = '';
    this.#bodyElem.append(node);
  }

  close() {
    document.body.classList.remove('is-modal-open');
    this.#elem.remove();
  }
}