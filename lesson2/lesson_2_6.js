"use strict";

//объявление переменных
let val = 0;
let pow = 0;
let n = 1; //пытался не объявлять дополнительных переменных или не объявлять их вне функции, но из-за цикла не получаетс положить их внутрь функции.
let result = 1;

//Изменения по комментариям педагога
function power(val, pow) {
  if (pow == NaN || val == NaN) {
    console.log('оба значения должны быть введены цифрами');
  } else if (pow == 0) {
    console.log('Результат равен единице');
    return;
  } else if (n < pow) {
    val *= val;
    n++;
  } else if (n > pow) {
    result = 1 / (result * val)
    n--
  } else {
    console.log('Результат равен ' + val);
    return;
  }
  power(val, pow);
}

//запрос переменных у пользователя
val = prompt('Введи число');
pow = prompt('Введи степень, в которую необходимо возвести число')
//запуск выполнения функции
power(val, pow);
