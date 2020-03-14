const array = [1, 2, 10, 16]
const newArray = () => {
  const arr = []
  for (const num of array) {
    arr.push(num * 2)
  }
  return arr
}

newArray() /* ? */

// map, filter, reduce
const mapping = () => array.map((num) => num * 2)
console.log(mapping())

const filterArray = array.filter((num) => num > 5)
filterArray

const reducedArray = array.reduce((acc, num) => acc + num)
reducedArray
console.log('%c%s', 'color: #f2ceb6', reducedArray)
