"use strict";

var horse = "\uD83D\uDC34";

var jsEngine = function jsEngine(code) {
  return code.split(/\s+/);
};

var result = jsEngine("const name = 'Dominique'");
console.log(result);

var someCalculation = function someCalculation(a, b, maths) {
  return maths(a, b);
};

var add = function add(a, b) {
  return a + b;
};

var calcResult = someCalculation(2, 4, add);
console.log(calcResult);