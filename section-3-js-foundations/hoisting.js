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
