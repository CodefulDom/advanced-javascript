function getName(name) {
  console.log('%c%s', 'color: #f2ceb6', ` Hello, ${name}`)
}

const obj = {
  name: 'Dominique',
  sing() {
    return `lalalala ${this.name}`
  },
  singAgain() {
    return `${this.sing()}!`
  }
}

console.log(obj.sing())
console.log(obj.singAgain())

const importantPerson = (name) => {
  return name
}

let importantResult = importantPerson('Elijah')
console.log(importantResult)
