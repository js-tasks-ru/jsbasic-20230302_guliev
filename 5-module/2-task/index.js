function toggleText() {
  const btn = document.querySelector('.toggle-text-button');
  const div = document.querySelector('#text');

  btn.addEventListener('click', () => {
    div.hidden ? div.hidden = false : div.hidden = true;
  });
}
