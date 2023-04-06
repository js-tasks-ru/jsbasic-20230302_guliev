/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

const NamesEnum = {
  name: 'Имя',
  age: 'Возраст',
  salary: 'Зарплата',
  city: 'Город'
}

export default class UserTable {
  elem = '';

  constructor(rows) {
     const table = document.createElement('table');
     const tHead = document.createElement('thead');
     const tBody = document.createElement('tbody');
     const tr = document.createElement('tr');

     Object.keys(rows[0]).forEach((item) => {
      const th = document.createElement('th');
      th.innerHTML = NamesEnum[item];
      tr.appendChild(th);
     });

     rows.forEach((row) => {
        const tr = document.createElement('tr');

        for(let elem in row){
          const td = document.createElement('td');
          td.innerHTML = row[elem];
          tr.appendChild(td);
        }

        const td = document.createElement('td');
        const button = document.createElement('button');
        button.innerHTML = 'X';

        button.addEventListener('click', () => {
          tBody.removeChild(tr);
        })

        td.appendChild(button);
        tr.appendChild(td);
        tBody.appendChild(tr);
     })

     tHead.appendChild(tr);
    
     table.appendChild(tHead);
     table.appendChild(tBody);
    
     this.elem = table;
  }
}