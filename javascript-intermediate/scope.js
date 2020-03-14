function aa() {
  console.log(`aa`)
}

let bText = 'Can I access this?'

function b() {
  return bText
}

let getB = b()
getB

const funFunction = () => {
  let fun = '👯‍♂️'
  console.log(fun)

  const mostFun = () => {
    let moreFun = `👯‍♀️ 👯‍♀️`
    console.log(moreFun)
    console.log(fun)
  }
  mostFun()
}

funFunction()
