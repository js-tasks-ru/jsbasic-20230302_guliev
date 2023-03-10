function truncate(str, maxlength) {
  if (typeof str === 'string') {
    if (str?.length > maxlength) {
      return `${str.substr(0, maxlength - 1)}…`;
    } else {
      return str;
    }
  } else {
    return false;
  }
}
