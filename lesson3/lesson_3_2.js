"use strict";
//объявляю массив
let basket = [{
    id: 0, //идетификатор строки
    goods: 'monitor', //группа товара
    bugrand: 'BenQ', //бренд товара
    price: 23000.00, //стоимость за единицу товара
    quantity: 1 //количество товра в корзине
  },
  {
    id: 1,
    goods: 'laptop',
    bugrand: 'Apple',
    price: 150000.00,
    quantity: 1
  },
  {
    id: 1,
    goods: 'laptopYearWarranty',
    bugrand: 'Apple',
    price: 15000.00,
    quantity: 2
  }
]
//объявляю переменю для вывода суммы
let sum = 0;

for (let i = 0; i < basket.length; i++) { //определяем количество альтераций цикла
  sum = sum + basket[i].price * basket[i].quantity; //на каждой альтерации прибавляем стоимость строки с товаром (цена на количество)
}

console.log(sum) //вывод информации
