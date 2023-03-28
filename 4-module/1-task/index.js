function makeFriendsList(friends) {
  document.body.insertAdjacentHTML('afterbegin', '<ul></ul>');

  const parentElement = document.getElementsByTagName('ul');

  parentElement[0].insertAdjacentHTML('afterbegin', friends?.map((item) => {
    return `<li>${item.firstName} ${item.lastName}</li>`;
  }).join(''));

  return parentElement[0];
}
