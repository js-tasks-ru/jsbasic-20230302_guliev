export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    this.elem.innerHTML = `
      <div class="slider__thumb" style="left: 0%;">
        <span class="slider__value">0</span>
      </div>
      <div class="slider__progress" style="width: 0%;"></div>
      <div class="slider__steps">
        <span class="slider__step-active"></span>
        ${'<span></span>'.repeat(this.steps - 1)}
      </div>
    `;
  }

  attachEventListeners() {
    this.elem.addEventListener('click', event => {
      const left = event.clientX - this.elem.getBoundingClientRect().left;
      const leftRelative = left / this.elem.offsetWidth;
      const segments = this.steps - 1;
      const approximateValue = leftRelative * segments;
      this.value = Math.round(approximateValue);
      const valuePercents = this.value / segments * 100;

      const sliderValue = this.elem.querySelector('.slider__value');
      const thumb = this.elem.querySelector('.slider__thumb');
      const progress = this.elem.querySelector('.slider__progress');

      sliderValue.textContent = this.value;
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;

      const allSteps = this.elem.querySelectorAll('.slider__steps > span');
      allSteps.forEach(step => step.classList.remove('slider__step-active'));
      event.target.classList.add('slider__step-active');

      this.elem.dispatchEvent(new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      }));
    });
  }

  onSliderChange(callback) {
    this.elem.addEventListener('slider-change', event => {
      callback(event.detail);
    });
  }

  get element() {
    return this.elem;
  }

  get currentValue() {
    return this.value;
  }

  set currentValue(newValue) {
    if (newValue >= 0 && newValue < this.steps) {
      this.value = newValue;
      const segments = this.steps - 1;
      const valuePercents = this.value / segments * 100;

      const sliderValue = this.elem.querySelector('.slider__value');
      const thumb = this.elem.querySelector('.slider__thumb');
      const progress = this.elem.querySelector('.slider__progress');

      sliderValue.textContent = this.value;
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;

      const allSteps = this.elem.querySelectorAll('.slider__steps > span');
      allSteps.forEach((step, index) => {
        step.classList.toggle('slider__step-active', index === this.value);
      });

      this.elem.dispatchEvent(new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      }));
    }
  }
}
