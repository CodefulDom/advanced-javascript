const horse = `🐴`

const jsEngine = (code) => {
  return code.split(/\s+/)
}

const result = jsEngine(`const name = 'Dominique'`)
console.log(result)

const someCalculation = (a, b, maths) => {
  return maths(a, b)
}

const add = (a, b) => {
  return a + b
}

const calcResult = someCalculation(2, 4, add)
console.log(calcResult)
