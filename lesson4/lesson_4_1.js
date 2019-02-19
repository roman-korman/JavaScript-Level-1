"use strict";
/**
 * Объявление объекта
 */
let obj = {};
/**
 *Функция запрашивает и анализирует вводимую информацию на корректность и запускает процесс пересчёта из цифрового значения в объекты
 */
function didgitsAnalysis() {
  let userDidgit = prompt("Введите число от 0 до 999");
  if (userDidgit === null) {
    alert("Отмена операции");
    return;
  } else if (userDidgit == 0) {
    //дальнейшие функции не могут работать со значением 0, приходится выводить отдельную проверку
    obj["единицы"] = 0;
    console.log(obj);
    return;
  } else if (userDidgit > 0 && userDidgit <= 999) {
    //проверка на корректность ввода
    objectsFilling(splitDigits(userDidgit)); //запуск функций
    console.log(obj);
    return;
  } else {
    //обработка исключений
    alert("Введено не корректное значение");
  }
  didgitsAnalysis();
}
/**
 *Функция разбирает число от 1 до 99 на составляющие и возвращает в качестве массива
 */
function splitDigits(number) {
  let digits = [];
  while (number) {
    digits.push(number % 10); //заполняет данные в массив последней цифрой (Остаток от деления на 10 (%))
    number = Math.floor(number / 10); //возвращает наибольшее целое число после деления на 10 (отрезает последний символ)
  }
  return digits;
}
/**
 * Функция принимает массив из трёх знаков и заполняет его в качество объектов
 */
function objectsFilling(massif) {
  for (let i = 0; i < massif.length; i++) {
    switch (i) {
      case 0:
        obj["единицы"] = massif[0];
      case 1:
        if (massif[1] == undefined) {
          break;
        } else {
          obj["десятки"] = massif[1];
        }
      case 2:
        if (massif[2] == undefined) {
          break;
        } else {
          obj["сотни"] = massif[2];
        }
    }
    return obj; //возврат заполненного объекта
  }
}
/**
 * Запуск выполнения кода
 */
didgitsAnalysis();
