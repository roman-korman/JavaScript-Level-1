"use strict";
/**
 * Объект корзины. Содержит массив с товарами в корзине и функции вывода суммы стоимостей товаров, количества товаров и количества позиций
 */
let basket = {
  goodList: [],
  /**
   * стоимость товара в корзине
   */
  countTotalPrice() {
    let sum = 0;
    for (let i = 0; i < this.goodList.length; i++) {
      sum += this.goodList[i].price * this.goodList[i].quantity;
    }
    return sum;
  },
  /**
   * Количество товара в корзине
   */
  countTotalNumber() {
    let quan = 0;
    for (let i = 0; i < this.goodList.length; i++) {
      quan += this.goodList[i].quantity;
    }
    return quan;
  },
  /**
   * Количество позиций в корзине
   */
  countTotalPositions() {
    return this.goodList.length;
  }
}

/**
 * Объект товара. Содержит собранное описание товара, цену и количество. Умеет заполнять поля из справочника и добавлять данные товара в корзину.
 */
let good = {
  /**
   * Функция прописывания товара в объект Good из справочника товаров
   */
  putToGood(i) {
    good.name = goodsArray[i].type + ' ' + goodsArray[i].brand + ' ' + goodsArray[i].model + ' ' + goodsArray[i].color;
    good.price = this.priceCheck(goodsArray[i].id);
    good.quantity = this.availableGoods(goodsArray[i].id);
    good.id = goodsArray[i].id
  },
  /**
   * Функция добавляет в корзину товар, проверяя наличие остатков
   */
  putToBasket(quantity) {
    if (quantity <= this.quantity) {
      basket.goodList.push({
        name: this.name,
        price: this.price,
        quantity: quantity
      })
    }
  },
  /**
   * Функция заполняет значение цены с учётом скидки
   */
  priceCheck(id) {
    for (let i = 0; i < priceArray.length; i++) {
      if (priceArray[i].goods_id == id) {
        return (priceArray[i].price_RUR - priceArray[i].discount_RUR)
      }
    }

  },
  /**
   * Функция заполняет значение остатков на центральном складе
   */
  availableGoods(id) {
    for (let i = 0; i < werhouseArray.length, werhouseArray[i].name == 'central'; i++) {
      if (werhouseArray[i].goods_id == id) {
        return werhouseArray[i].quantity;
      }
    }
  },
  id: 0,
  name: 'AAA',
  price: 0,
  quantity: 1
}
