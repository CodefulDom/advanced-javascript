const groceries = ['apples', 'grapes', 'oranges']

for (let i = 0; i < groceries.length; i++) {
  const element = groceries[i]
  console.log(element)
}

const detailedObject = {
  oranges: 10,
  apples: 20,
  grapes: 1000
}

for (const properties in detailedObject) {
  console.log(properties)
}

for (const item of groceries) {
  console.log(item)
}
