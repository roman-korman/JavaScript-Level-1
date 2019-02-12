"use strict";
//Дан массив
let a = [
  [{
    name: 'Mary',
    age: 23
  }, {
    name: 'Mike',
    age: 45
  }, {
    name: 'Nick',
    age: 11
  }],
  [{
    name: 'Adam',
    age: 56
  }, {
    name: 'Sara',
    age: 21
  }, {
    name: 'Don',
    age: 22
  }],
  [{
    name: 'Karl',
    age: 34
  }, {
    name: 'Marta',
    age: 76
  }, {
    name: 'John',
    age: 19
  }]
];

//Скопируйте его в переменную b и выведите в консоль. .slice() без значений в скобках выполняет полное клонирование массива.
let b = a.slice();
//Вывод массива
console.log(b);
