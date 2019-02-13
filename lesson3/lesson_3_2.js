"use strict";
//объявляю массив
let basket = [{
    id: 0, //идетификатор строки
    goods: 'monitor', //группа товара
    brand: 'BenQ', //бренд товара
    price: 23000.00, //стоимость за единицу товара
    quantity: 1 //количество товра в корзине
  },
  {
    id: 1,
    goods: 'laptop',
    brand: 'Apple',
    price: 150000.00,
    quantity: 1
  },
  {
    id: 2,
    goods: 'laptopYearWarranty',
    brand: 'Apple',
    price: 15000.00,
    quantity: 2
  }
]
//объявляю переменю для вывода суммы


function countBasketPrice(basket) {
  let sum = 0;
  for (let i = 0; i < basket.length; i++) { //определяем количество альтераций цикла
    sum = sum + basket[i].price * basket[i].quantity; //на каждой альтерации прибавляем стоимость строки с товаром (цена на количество)
  }
  return sum;
}

console.log(countBasketPrice(basket)) //вывод информации
