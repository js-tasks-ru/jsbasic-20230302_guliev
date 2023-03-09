function checkSpam(str) {
  // первый вариант был с xxx || 1xbet в indexof я не понял почему это не работает 
  return str.toLowerCase().indexOf('xxx') >= 0 || str.toLowerCase().indexOf('1xbet') >= 0
}
