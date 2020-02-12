// hoisting - moving variables and function declarations are put at the top of their lexical environments

console.log(1)
var teddy = 'bear'

const sing = () => {
  console.log(`OH LA LA LA`)
}

console.log(teddy)
console.log(sing())
