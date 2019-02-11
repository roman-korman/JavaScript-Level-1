"use strict";
//объявление переменных
let a = 0;
let b = 0;

//операция сложения
function calcAddition(a, b) {
  return a + b;
}
//опирация вычитания
function calcSubtraction(a, b) {
  return a - b;
}
//операция умножения
function calcMultiplication(a, b) {
  return a * b;
}
//операция деления
function calcDivision(a, b) {
  if (b == 0) { //Изменения по комментариям педагога
    return -1; //Изменения по комментариям педагога
  } else { //Изменения по комментариям педагога
    return a / b;
  } //Изменения по комментариям педагога
}

//запрос переменных у пользователя
a = +prompt('Введи первое число');
b = +prompt('Введи второе число');

//вывод данных пользователю
alert('операция сложения ' + calcAddition(a, b));
alert('опирация вычитания ' + calcSubtraction(a, b));
alert('операция умножения ' + calcMultiplication(a, b));
alert('операция деления ' + calcDivision(a, b));
