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

export default class UserTable {
  elem = '';

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
              <button class='button_${index}' type='button'>X</button>
            </td> 
          </tr>
        `).join('')}
      </tbody>
    `;
  
    const buttons = table.querySelectorAll('button');
    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const tr = event.target.parentNode.parentNode;
        tr.remove();
      });
    });
  
    this.elem = table;
  }
}