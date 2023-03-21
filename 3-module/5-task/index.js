function getMinMax(str) {
  const onlyNums = str.replace(/[а-яА-Я]/g, '').split(' ').filter((item) => Number(item)).map((item) => parseFloat(item));

  return {
    min: Math.min.apply(null, onlyNums),
    max: Math.max.apply(null, onlyNums)
  }
}
