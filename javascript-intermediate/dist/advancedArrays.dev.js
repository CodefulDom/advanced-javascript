"use strict";

var array = [1, 2, 10, 16];

var newArray = function newArray() {
  var arr = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var num = _step.value;
      arr.push(num * 2);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return arr;
};

newArray();
/* ? */
// map, filter, reduce

var mapping = function mapping() {
  return array.map(function (num) {
    return num * 2;
  });
};

console.log(mapping());
var filterArray = array.filter(function (num) {
  return num > 5;
});
filterArray;
var reducedArray = array.reduce(function (acc, num) {
  return acc + num;
});
console.log('%c%s', 'color: #f2ceb6', reducedArray);