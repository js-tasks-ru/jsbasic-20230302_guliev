function initCarousel() {
  const rightBtn = document.querySelector('.carousel__arrow_right');
  const leftBtn = document.querySelector('.carousel__arrow_left');
  const carousel = document.querySelector('.carousel__inner');
  let num = 0;
  leftBtn.style.display = 'none';

  rightBtn.addEventListener('click', () => {
    num += 1;
    carousel.style.transform = `translateX(${-carousel.offsetWidth * num}px)`

    if(num === 3){
      rightBtn.style.display = 'none';
      leftBtn.style.display = '';
    } 
    console.log(num);
  });

  leftBtn.addEventListener('click', () => {
    num = num - 1;
    carousel.style.transform = `translateX(${-carousel.offsetWidth * num}px)`

    if(num === 0){
      rightBtn.style.display = '';
      leftBtn.style.display = 'none';
    } 
    console.log(num);
  })
}
