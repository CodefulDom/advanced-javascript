const sillyArray = [
  [1, 2],
  [3, 4],
  [5, 6]
]

const flattened = sillyArray.flat().reduce((acc, item) => acc + item)
console.log(flattened)
