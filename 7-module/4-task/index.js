export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;

    this.render();
    this.renderSteps();

    this.addEventListeners();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');

    this.thumb = document.createElement('div');
    this.thumb.classList.add('slider__thumb');
    this.thumb.innerHTML = `
      <span class="slider__value">${this.value}</span>
    `;
    this.elem.appendChild(this.thumb);

    this.progress = document.createElement('div');
    this.progress.classList.add('slider__progress');
    this.elem.appendChild(this.progress);

    this.stepsElem = document.createElement('div');
    this.stepsElem.classList.add('slider__steps');
    this.elem.appendChild(this.stepsElem);
  }

  renderSteps() {
    for (let i = 0; i < this.steps; i++) {
      const step = document.createElement('span');
      step.classList.add('slider__step');

      if (i === this.value) {
        step.classList.add('slider__step-active');
      }

      this.stepsElem.appendChild(step);
    }
  }

  addEventListeners() {
    this.elem.addEventListener('click', this.onClick.bind(this));
    this.thumb.addEventListener('pointerdown', this.onPointerDown.bind(this));
  }

  onClick(event) {
    if (event.target.closest('.slider__thumb')) {
      return;
    }

    const left = event.clientX - this.elem.getBoundingClientRect().left;
    const leftRelative = left / this.elem.offsetWidth;

    this.setValue(Math.round(leftRelative * (this.steps - 1)));
  }

  onPointerDown() {
    this.elem.classList.add('slider_dragging');

    window.addEventListener('pointermove', this.onPointerMove.bind(this));
    window.addEventListener('pointerup', this.onPointerUp.bind(this));
  }

  onPointerMove(event) {
    const left = event.clientX - this.elem.getBoundingClientRect().left;
    const leftRelative = left / this.elem.offsetWidth;

    this.setValue(Math.round(leftRelative * (this.steps - 1)));
  }

  onPointerUp() {
    this.elem.classList.remove('slider_dragging');

    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerup', this.onPointerUp);
  }

  setValue(value) {
    if (value < 0 || value > this.steps - 1) {
      return;
    }

    this.value = value;

    const offsetLeft = (this.value / (this.steps - 1)) * 100;
    this.thumb.style.left = `${offsetLeft}%`;
    this.progress.style.width = `${offsetLeft}%`;

    const steps = this.stepsElem.querySelectorAll('.slider__step');
    steps[this.value].classList.add('slider__step-active');

    for (let i = 0; i < steps.length; i++) {
      if (i !== this.value) {
        steps[i].classList.remove('slider__step-active');
      }
    }

    this.thumb.querySelector('.slider__value').textContent = this.value;

    this.elem.dispatchEvent(new CustomEvent('slider-change', {
      detail: this.value,
      bubbles: true
    }));
  }
}