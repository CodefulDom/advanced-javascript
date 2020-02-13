function weird() {
  return (height = 50)
}

let result = weird()
console.log(result)

var hey = function doodle() {
  weird()
  return 'Hey'
}

let heyResult = hey()
