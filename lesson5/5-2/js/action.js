"use strict";
/**
 * Прохожу по справочнику товаров.
 * Записываю в объект товара необходимые характеристики собирая имя из свойств массива. Добавляю Цену со скидкой из справочника цен. Добавляю количество товара
 * Затем запускаю функцию добавления в корзину передавая в неё количество начиная с нулевой позиции (чётной)
 * При добавлении в корзину проверяю остатки товара и если их меньше нужного количества - товар в корзину не попадает.
 */
function fillBasket() {
  for (let i = 0; i < goodsArray.length; i++) {
    let q = 0;
    if (i & 1) {
      q = 2
    } else {
      q = 1
    };
    good.putToGood(i);
    good.putToBasket(q);

  }
  renderer.render();
};

let renderer = {

  render() {
    let table = this.generateTable();
    let tablePosition = document.getElementById('basket');
    tablePosition.insertAdjacentHTML('afterend', table);
  },

  generateTable() {
    let board = '';
    if (basket.goodList.length == 0) {
      board += '<tr><td>В корзине пока пусто :-(</td></tr>';
    } else {
      board += '<tr><td>№</td><td>название товара</td><td>цена</td><td>количество</td><td>цена иторго</td></tr>';
      for (let i = 0; i < basket.goodList.length; i++) {
        board += '<tr>';
        board += '<td>' + (i + 1) + '</td>';
        board += '<td>' + basket.goodList[i].name + '</td>';
        board += '<td>' + basket.goodList[i].price + '</td>';
        board += '<td>' + basket.goodList[i].quantity + '</td>';
        board += '<td>' + basket.goodList[i].price * basket.goodList[i].quantity + '</td>';
        board += '</tr>';
      }
      board += '<tr><td colspan="5">Итого:</td></tr>';
      board += '<tr><td colspan="4">Позиций в корзине</td><td>' + basket.countTotalPositions() + '</td></tr>';
      board += '<tr><td colspan="4">Товаров в корзине</td><td>' + basket.countTotalNumber() + '</td></tr>';
      board += '<tr><td colspan="4">Итоговая цена</td><td>' + basket.countTotalPrice() + '</td></tr>';
    }
    return '<table><tbody>' + board + ' </tbody></table>';
  }
};
fillBasket();
renderer.render();
