function ucFirst(str) {
  if (str.length > 0) {
    let wordArr = str.split('');
    wordArr[0] = wordArr[0].toUpperCase();
    return wordArr.join('');
  } else {
    return str;
  }
}
