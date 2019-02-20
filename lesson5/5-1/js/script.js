"use strict";
let renderer = {
  render() {
    let table = this.generateTable();
    document.body.insertAdjacentHTML('afterbegin', table);
    this.renderUserPosition(player);
  },

  generateTable() {
    let board = '';
    for (let y = 0; y <= config.rowsCount; y++) { //счётчик строк оставил из игры
      if (y == config.rowsCount) { //определение последней строки
        board += '<tr>';
        for (let x = 0; x <= config.colsCount; x++) {
          if (x == 0) { //отделение пустой ячейки
            board += '<td class="contents"></td>';
          } else { //вывод массива с буквами
            board += '<td class="contents">' + letter[x - 1] + '</td>';
          }
        }
        board += '</tr>';
      } else {
        board += '<tr>';
        board += '<td class="contents">' + didgit[y] + '</td>'; //в каждом цикле сначала выводится ячейка с цифрой из массива
        if (y % 2 == 1) { //определение чётности строк
          /**
           * за итерацию рисуется сразу и чёрная и белая ячейка. Учитывая то, что мы точно знаем формат выводимой таблицы не стал делать возможность вывода нечётного количества
           */
          for (let x = 0; x < config.colsCount; x += 2) {
            board += '<td class="black"> </td>';
            board += '<td class="white"> </td>';
          }
        } else {
          for (let x = 0; x < config.colsCount; x += 2) { // за итерацию рисуется сразу и чёрная и белая ячейка
            board += '<td class="white"> </td>';
            board += '<td class="black"> </td>';
          }
        }
        board += '</tr>';
      }
    }
    return '<table><tbody>' + board + ' </tbody></table>';
  },


};
renderer.render();
