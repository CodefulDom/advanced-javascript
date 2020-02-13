function india() {
  console.log('HOT')
}

const canada = () => 'COLD'
let result = canada()
console.log(result)

function married(...args) {
  console.log(`arguments: ${args}`)
  return `${args[0]} is married to ${args[1]}`
}

let marriedResult = married('Dom', 'Becky')
console.log(marriedResult)
