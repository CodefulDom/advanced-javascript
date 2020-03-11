const add = (a, b) => a + b
const addResult = add(2, 2)
console.log('%c%s', 'color: #aa00ff', `addResult: ${addResult}`)

// function expression
const sayBye = () => {
  return `👋🏾`
}

const sayByeResult = sayBye()
console.log(sayByeResult)

const sing = (song, repeated) => {
  return song.repeat(repeated)
}

const singResult = sing(`Backstreet's ALRIGHT`, 6)
console.log(singResult)
