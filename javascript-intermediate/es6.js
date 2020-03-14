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
