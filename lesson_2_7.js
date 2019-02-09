"use strict";
//объявляем переменные
let pass = 'pass';


//Функция вычисления длинны пароля
function passLength(pass) {
  if (pass.length < 3) {
    return 'error';
  } else if (pass.length > 12) {
    return 'error';
  } else {
    return 'ok';
  }

}

//функция проверки пароля на наличие символов &, $, %, *
function passSymbol(pass) {
  if (pass.indexOf('&') < 0 && pass.indexOf('$') < 0 && pass.indexOf('%') < 0 && pass.indexOf('*') < 0) {
    return 'error';
  } else {
    return 'ok';
  }
}


//функция проверки пароля на совпадение с буквами
function passLetter(pass) {
  if (pass.indexOf('q', 0) == 0 || pass.indexOf('Q', 0) == 0 || (pass.length - pass.lastIndexOf("z")) == 1 || (pass.length - pass.lastIndexOf("Z")) == 1) {
    return 'ok';
  } else {
    return 'error';
  }
}

//функция проверки пароля
function passCheck(pass) {
  if (passLength(pass) == 'error') {
    alert('Некорректный пароль');
    return;
  } else if (passSymbol(pass) == 'error') {
    alert('Некорректный пароль');
    return;
  } else if (passLetter(pass) == 'error') {
    alert('Некорректный пароль');
    return;
  } else {
    alert('Корректный пароль');
  }

}
//запрос ввода пароля
pass = prompt('Введите пароль');

//запуск функции проверки пароля
passCheck(pass);
