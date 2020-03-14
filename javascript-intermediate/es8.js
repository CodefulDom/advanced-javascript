const myTurtlesName = 'Mikey'
console.log(myTurtlesName.padStart(10))

const fun = (a, b, c, d, e) => a
fun(1, 2, 3, 4, 5) /* ? */

let obj = {
  userName: 'Santa',
  userName1: 'Rudolph',
  userName2: 'Mr. Grinch'
}

const objBreakdown = () => {
  for (const property in obj) {
    console.log(property)
  }
}

objBreakdown() /* ? */

const array = [1, 2, 3, 4, 5]
const countArray = () => {
  const newArray = []
  array.forEach((num) => {
    newArray.push(num * 2)
  })
  return newArray
}

const countArrayResult = countArray()
console.log(countArrayResult)

let getKeys = () => {
  Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key])
  })
}

getKeys()

let getValues = () => {
  Object.values(obj).forEach((value) => {
    console.log(value)
  })
}

getValues()

let getEntries = () => {
  Object.entries(obj).forEach((entry) => {
    console.log(entry)
  })
}

getEntries()

Object.entries(obj).forEach((entry) => {
  return `${entry[1]} ${entry[0]}`.replace('username', '') /* ? */
})
