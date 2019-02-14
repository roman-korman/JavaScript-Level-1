"use strict";
//весь код был переписан, после комментариев педагога. Теперь учитываются все варианты.
//объявление переменных
let val = 0;
let pow = 0;
let n = 1;
let result = 1;

//вызываемая функция математического возведения в степень
function exponentiationCalculation(val, pow) {
  if (n <= Math.abs(pow)) {
    result *= val;
    n++;
  } else {
    return result;
  }
  exponentiationCalculation(val, pow);
}
//просто пример, как было бы проще написать данную функцию
// function exponentiationCalculation(val, pow) {
//   while (n <= Math.abs(pow)) {
//     result *= val;
//     n++;
//   }
// }

//Функция проводит проверку введённых данных и вызывает расчёт в зависимости от введённых вариантов
function exponentiationSpooler(val, pow) {
  if (pow == 0) {
    alert('Результат равен единице');
  } else if (1 < pow) {
    exponentiationCalculation(val, pow);
    alert('Результат равен ' + result);
  } else if (1 > pow) {
    exponentiationCalculation(val, pow);
    alert('Результат_равен 1/' + result);
    result = 1 / result;
    alert('Результат_равен ' + result);
  } else {
    alert('оба значения должны быть введены цифрами');
  }
}

//запрос переменных у пользователя
val = prompt('Введи число');
pow = prompt('Введи степень, в которую необходимо возвести число')
//запуск выполнения функции
exponentiationSpooler(val, pow);
