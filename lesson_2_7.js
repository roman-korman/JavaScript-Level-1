"use strict";
//объявляем переменные
let pass = 'pass';


//Функция вычисления длинны пароля
function checkPassLength(pass) {
  if (pass.length < 3) {
    return false;
  } else if (pass.length > 12) {
    return false;
  } else {
    return true;
  }

}

//функция проверки пароля на наличие символов &, $, %, *
function checkPassSymbol(pass) {
  if (pass.indexOf('&') < 0 && pass.indexOf('$') < 0 && pass.indexOf('%') < 0 && pass.indexOf('*') < 0) {
    return false;
  } else {
    return true;
  }
}


//функция проверки пароля на совпадение с буквами
function checkPassLetter(pass) {
  if (pass.indexOf('q', 0) == 0 || pass.indexOf('Q', 0) == 0 || (pass.length - pass.lastIndexOf("z")) == 1 || (pass.length - pass.lastIndexOf("Z")) == 1) {
    return true;
  } else {
    return false;
  }
}

//функция проверки пароля
function passCheck(pass) {
  if (checkPassLength(pass) == false) {
    alert('Некорректный пароль');
    return;
  } else if (checkPassSymbol(pass) == false) {
    alert('Некорректный пароль');
    return;
  } else if (checkPassLetter(pass) == false) {
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
