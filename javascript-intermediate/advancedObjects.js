/*
  reference type
  context
  instantiation
*/
let object1 = {
  value: 10,
  value2: 20
}

let object2 = {
  value: 10
}

console.log(object1 === object2)
object2 = object1

console.log(object2)
console.log(object1 === object2)

// context
function b() {
  let a = 4
  console.log(a)
  console.log(this)
}

b() /* ? */

const obj4 = {
  a() {
    console.log(this)
  }
}

class Player {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  introduce() {
    return `Hi, my name is ${this.name} and I am a ${this.type}.`
  }
}

const playerOne = new Player('Dom', 'nice guy')
playerOne.introduce() /* ? */

class superDude extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    return `I am a ${this.type} type of dude WEEEEEE!`
  }
}

const awesomeDude = new superDude('Dom', 'awesome, smart, funny')
console.log(awesomeDude)
console.log(awesomeDude.play())
