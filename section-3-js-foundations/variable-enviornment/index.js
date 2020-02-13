function two() {
  isValid
  return `Is option Valid: ${isValid}`
}

function one() {
  var isValid = true
  two()
}

var isValid = false
one()

function sayMyName() {
  var a = 'a'
  return function findName() {
    var b = 'b'
    return function printName() {
      var c = 'c'
      console.log(a)
      return 'Dom CodefulDom Hallan'
    }
  }
}

sayMyName()()()
