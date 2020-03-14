const first = () => {
  const greet = 'Hi'
  const second = () => {
    console.log(greet)
  }
  return second
}

const newFunc = first()
newFunc()

// Currying
const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b
const multiplyBy5 = curriedMultiply(5)
console.log(multiplyBy5(5))

// compose: take 2 functions and combine them so the output of one function is returned in the other function
const compose = (f, g) => (a) => f(g(a))
const sum = (num) => num + 1
compose(sum, sum)(5) /* ? */
