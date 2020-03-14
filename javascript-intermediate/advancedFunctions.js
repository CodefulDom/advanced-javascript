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
curriedMultiply(3)(6) /* ? */
