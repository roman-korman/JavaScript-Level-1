"use strict";
/**
 * объект расчётов
 */
let code = {
  fildArray: [ //игровой массив
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  step: 0, //переменная счётчика шагов для чётности
  ttt(arr) {
    let d13 = 0,
      d31 = 0,
      r1 = 0,
      r2 = 0,
      r3 = 0,
      c1 = 0,
      c2 = 0,
      c3 = 0;
    /**
     * высчитываю текущее состояние поля
     */
    for (let i = 0; i < arr.length; i++) {
      d13 += arr[i][i];
      d31 += arr[i][arr.length - 1 - i];
      r1 += arr[0][i];
      r2 += arr[1][i];
      r3 += arr[2][i];
      c1 += arr[i][0];
      c2 += arr[i][1];
      c3 += arr[i][2];

    }
    /**
     *  Проверяю на выигрыш
     */
    if (d13 == 3 || d31 == 3 || r1 == 3 || r2 == 3 || r3 == 3 || c1 == 3 || c2 == 3 || c3 == 3) {
      return ('1');
    } else if (d13 == -3 || d31 == -3 || r1 == -3 || r2 == -3 || r3 == -3 || c1 == -3 || c2 == -3 || c3 == -3) {
      return ('-1')
    } else {
      return ('0')
    }
  },
  /**
   * Функция действия на поле
   */
  push(x, y) {
    this.step++ //счётчик шагов
    if (this.step % 2 == 1) {
      this.fildArray[x][y] = 1;
    } else {
      this.fildArray[x][y] = -1;
    }
    renderer.render(); //перерисовать после действия
  }
};

/**
 * Объект вывода
 */
let renderer = {
  render() {
    let feeld = this.generateFeeld();
    let gameFeeld = document.getElementById('ttt');
    gameFeeld.innerHTML = feeld;
  },
  generateFeeld() {
    let board = '';
    if (code.ttt(code.fildArray) == 0) {
      for (let i = 0; i < code.fildArray.length; i++) { //наполняем строки
        for (let j = 0; i < code.fildArray[i].length; j++) { //наполняем ячейки
          if (code.fildArray[i][j] == 0) { //пустой квадрат
            board += '<button onclick="code.push(' + i + ',' + j + ')"></button>'
          } else if (code.fildArray[i][j] == 1) { //квадрат с X
            board += '<i>X</i>'
          } else if (code.fildArray[i][j] == -1) { //квадрат c 0
            board += '<i>0</i>'
          } else {
            break;
          }
        }
        board += '<br>';
      }
    } else if (code.ttt(code.fildArray) == 1) {
      board += '<span>выиграли КРЕСТИКИ</span>'
    } else if (code.ttt(code.fildArray) == -1) {
      board += '<span>выиграли НОЛИКИ</span>'
    }
    board += '<button style="width: 300px" onclick="renderer.cleareFeeld()">очистить поле</button>';
    return board;
  },
  /**
   * Функция очистки игрового поля
   */
  cleareFeeld() {
    code.fildArray = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    code.step = 0;
    renderer.render();
  }
}
/**
 * Запуск игры
 */
renderer.render();
