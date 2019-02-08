"use strict";
// *С помощью рекурсии организовать функцию возведения числа в степень. Формат:
// function power(val, pow), где val — заданное число, pow –— степень.
//объявление переменных
let val = 0;
let pow = 0;
let n = 0; //пытался не объявлять дополнительных переменных или не объявлять их вне функции, но из-за цикла не получаетс положить их внутрь функции. 
let result = 1;

//Функция вычисления числа в степени
function power(val, pow) {
  if (pow <= 1) {
    alert('Степень ' + pow + ' не поддерживается, введите целую степень, большую 1');
    return;
  } else if (n < pow) {
    result *= val;
    n++;
  } else {
    alert('Результат равен ' + result);
    return;
  }
  power(val, pow);
}

//запрос переменных у пользователя
val = +prompt('Введи число');
pow = +prompt('Введи степень, в которую необходимо возвести число')
//запуск выполнения функции
power(val, pow);
