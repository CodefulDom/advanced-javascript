const flatten = [1, [2, 3], [4, [5]]]
console.log(flatten.flat(2))

const jurassicPark = ['🏇🏾', '🐕', [['😺']], ['🐸']]
console.log(jurassicPark.flat(3))
const entries = ['bob', 'sally', , , , , , , , 'cindy']
console.log(entries.flat())
const jurassicParkChaos = jurassicPark.flatMap((creature) => `${creature} 💩`)
console.log(jurassicParkChaos)

const userEmail = '         eddytheEagle@gmail.com'
console.log(userEmail.trimStart())

const userProfiles = [
  ['commanderTom', 23],
  ['dom', 37],
  ['hansel', 55]
]
const correctedUserProfiles = Object.fromEntries(userProfiles)
console.log(correctedUserProfiles)

const name = 'Dom'
