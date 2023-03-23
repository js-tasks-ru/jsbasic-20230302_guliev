function camelize(str) {
  return str.split('-').map((item, index) => {
    return index < 1 ? item : item.charAt(0).toUpperCase() + item.slice(1);
  }).join('');
}
