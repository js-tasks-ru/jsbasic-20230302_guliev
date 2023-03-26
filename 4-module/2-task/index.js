function makeDiagonalRed(table) {
  const tr = table.getElementsByTagName('tr');
  let painted = 0;

  Array.from(tr).forEach((item) => {
    const td = item.getElementsByTagName('td');

    for (let i = 0; i <= td.length; i++) {
      if (i === painted) {
        td[i].style.cssText = 'background-color: red;'
        painted += 1;
        break;
      }
    }
  });

  // Это можно не смотреть, оставляю тут для себя =)

  // const tr = table.getElementsByTagName('tr');
  // let painted = tr.length - 1;

  // Array.from(tr).forEach((item) => {
  //   const td = item.getElementsByTagName('td');

  //   for (let i = 0; i <= td.length; i++) {
  //     if (i === painted) {
  //       td[i].style.cssText = 'background-color: red;'
  //       painted = painted - 1;
  //       break;
  //     }
  //   }
  // });
}
