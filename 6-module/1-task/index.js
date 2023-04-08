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

  deleteItem(index) {
    const trs = document.querySelectorAll('tr');
    // тут хочу удалять из trs элемент под нужным индексом
    console.log(trs);
  }

  #createDeleteButton(index){
    const button = document.createElement('button');
    button.innerHTML = 'X';
    
    button.addEventListener('click', this.deleteItem);

    return button.outerHTML;
  }

  constructor(rows) {
    const table = document.createElement('table');

    table.innerHTML = `
    <thead>
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>
    </thead>
    <tbody>
       ${rows.map((row, index) => `
          <tr>
             <td>${row.name}</td>
             <td>${row.age}</td>
             <td>${row.salary}</td>
             <td>${row.city}</td>
             <td>
                ${this.#createDeleteButton(index)}
             </td> 
          </tr>
       `).join('')}
    </tbody>
    `

    this.elem = table;
  }
}