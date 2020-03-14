function isUserValid(bool) {
  return bool
}

let answer = isUserValid(true) && '✅'
isUserValid(answer) /* ? */

let automatedAnswer = isUserValid(false) && 'cc9b3009-39d8-4156-a89b-af5326f31ad3'

function condition() {
  if (isUserValid(true)) {
    return `You may enter`
  } else {
    return 'Access denied'
  }
}

let answer2 = condition()
console.log(answer)
