"use strict";
//объявление переменных
let a = 0;
let b = 0;

//функция расчёта значений по следующему принципу:
//если a и b положительные, вывести их разность;
//если а и b отрицательные, вывести их произведение;
//если а и b разных знаков, вывести их сумму;
function calcAddition(a, b) {
  return a + b;
}

function calcSubtraction(a, b) {
  return a - b;
}

function calcMultiplication(a, b) {
  return a * b;
}

function calcDivision(a, b) {
  return a / b;
}

//запрос переменных у пользователя
a = +prompt('Введи первое число');
b = +prompt('Введи второе число');

//вывод данных пользователю
alert(calcAddition(a, b));
alert(calcSubtraction(a, b));
alert(calcMultiplication(a, b));
alert(calcDivision(a, b));
