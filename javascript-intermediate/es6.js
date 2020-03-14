const obj = {
  name: 'Dom',
  age: 37
}

const name = `Kobe Bean Bryant ⛹🏾‍♂️`

const ballers = {
  [name]: 'Hi',
  ['dom' + 'hallan']: 'what up'
}

console.log(ballers)
console.log(ballers.domhallan)
console.log(ballers[name])

const alpha = 'Simon'
const beta = 'Alfred'
const cThing = 'What is this'

const newObj = {
  alpha,
  beta,
  cThing
}

console.log(newObj.alpha)

function greeting(name = 'Dom', age = 37, pet = '🐕') {
  return `Hello, ${name} you are ${age}. What a lovely ${pet}.`
}

greeting() /* ? */

let sym1 = Symbol('foo')
let sym2 = Symbol('foo foo')
let sym3 = Symbol('foo foo foo')

console.log(sym1)
console.log(sym2)
console.log(sym3)

const symbolObject = {
  one: Symbol('one')
}

console.log(symbolObject.one)
