// hoisting - moving variables and function declarations are put at the top of their lexical environments

console.log(1)
var teddy = 'bear'
console.log(sing())

function sing() {
  console.log(`BANG`)
}

const sing2 = () => {
  console.log(`OH LA LA LA`)
}

console.log(teddy)
console.log(sing2())

var one = 1
var one = 2
console.log(one)

greet()

function greet() {
  console.log(`hey`)
}
function greet() {
  console.log(`bye`)
}

var favFood = 'grapes'

var foodThoughts = () => {
  console.log(`OG favorite food: ${favFood}`)
  var favFood = 'fish'
  console.log(`New Fav Food: ${favFood}`)
}

foodThoughts()

function bigBro() {
  function littleBro() {
    return `It's me!`
  }
  return littleBro() /* ? */
  function littleBro() {
    return `No, ME!`
  }
}

bigBro()
