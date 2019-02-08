"use strict";
let a = 6;
let b = 4;

if ((a >= 0) && (b >= 0)) {
  console.log(a - b);
}
else if ((a < 0) && (b < 0)) {
  console.log(a * b);
}
else if (((a < 0) && (b >= 0)) || ((a >= 0) && (b < 0))) {
  console.log(a + b);
}
