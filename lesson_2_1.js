"use strict";
//Пример 1
let a = 1,
	b = 1,
	c, d;
c = ++a;
alert(c); //ответ: 2
//++ перед переменной с увеличивает переменную a на 1, затем отрабатывает присвоение

//Пример 2
d = b++;
alert(d); //ответ: 1
//++ после переменной сначала присваевает текущее значение переменной b к переменной d, а потом увеличивает значение переменной b на единицу

//Пример 3
c = (2 + ++a);
alert(c); ////ответ: 5
// к двойке первым плюсом прибавляется значение переменной а (в данный момент 2) к которой прибавилась единица

//Пример 4
d = (2 + b++);
alert(d); //ответ: 4
//В момент присвоения переменная b равна 2, к которой прибавляется 2, после присвоения b увеличивается на 1
alert(a); //ответ: 3 
//пример 1 - а стала равна 2, пример 3 - а стала равна 3
alert(b); //ответ: 3
// Пример 1 - b присвоена 1, Пример 2 - b увеличина на единицу, Пример 4 - b увеличина на 1
