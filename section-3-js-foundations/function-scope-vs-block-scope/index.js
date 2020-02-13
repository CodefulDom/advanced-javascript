function heatCheck() {
  if (5 > 4) {
    var pass = '12345'
  }
}

function loop(array) {
  for (var index = 0; index < array.length; index++) {
    const element = array[index]
    console.log(element)
  }
  console.log(`final: ${index}`)
}

let result = loop([1, 2, 3, 4, 5])
