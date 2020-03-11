/* 
string
boolean
undefined
null
symbol
object
*/

// number
3 + 4
4 * 5
12 - 4
5 % 5

// string
const myFirstName = `Dom`
console.log('%c%s', 'color: #f2ceb6', myFirstName)

const myLastName = `Hallan`
console.log('%c%s', 'color: #00e600', myLastName)

const fullName = `${myFirstName} ${myLastName}`
console.log('%c%s', 'color: #00a3cc', fullName)

// undefined
let birthMonth
console.log(birthMonth)

// null
let lackOfDesire = null
console.log(lackOfDesire)

// symbol

// object
const favoriteHoopers = {
  mj: 'Michael Jeffery Jordan',
  kb: 'Kobe Bean Bryant'
}

console.log(favoriteHoopers)

// boolean
const isBlack = false
console.log(isBlack)

const isNotWhite = true
console.log(isNotWhite)
