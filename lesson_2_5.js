"use strict";
//объявляем переменные
let arg1 = 0;
let arg2 = 0;
let operation = 'операция';

//Функция вычисления данных пользователя
function mathOperation(arg1, arg2, operation) {
  if (operation == 'сложить') {
    return arg1 + arg2;
  } else if (operation == 'вычесть') {
    return arg1 - arg2;
  } else if (operation == 'умножить') {
    return arg1 * arg2;
  } else if (operation == 'разделить') {
    return arg1 / arg2;
  } else {
    return 'ну и считай в уме';
  }
}

//Сначала написал функцию на switch, но она выдавала ошибку, попробовал на if. Отладил. Теперь обе работают
function mathOperationSwitch(arg1, arg2, operation) {
  switch (operation) {
    case 'сложить':
      return arg1 + arg2;
      break;
    case 'вычесть':
      return arg1 - arg2;
      break;
    case 'умножить':
      return arg1 * arg2;
      break;
    case 'разделить':
      return arg1 / arg2;
      break;
    default:
      return 'ну и считай в уме';
  }
}

//запрашиваем значения переменных у пользователя
arg1 = +prompt('Введи первое число');
arg2 = +prompt('Введи второе число');
operation = prompt('Что нужно сделать?');


//выводим результат
alert(mathOperation(arg1, arg2, operation));
alert(mathOperationSwitch(arg1, arg2, operation));
