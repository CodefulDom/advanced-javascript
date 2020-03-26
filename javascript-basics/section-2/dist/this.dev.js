"use strict";

function getName(name) {
  console.log('%c%s', 'color: #f2ceb6', " Hello, ".concat(name));
}

var obj = {
  name: 'Dominique',
  sing: function sing() {
    return "lalalala ".concat(this.name);
  },
  singAgain: function singAgain() {
    return "".concat(this.sing(), "!");
  }
};
console.log(obj.sing());
console.log(obj.singAgain());

var importantPerson = function importantPerson(name) {
  return name;
};

var importantResult = importantPerson('Elijah');
console.log(importantResult);