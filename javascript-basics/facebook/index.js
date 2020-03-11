let database = [
  {
    userName: 'codefuldom',
    password: 'password'
  }
]

let newsFeed = [
  {
    userName: 'codefuldom',
    timeLine: 'So tired'
  }
]

let userNamePrompt = prompt('What is your username?')
console.log('%c%s', 'color: #733d00', userNamePrompt)

let userPassword = prompt('Enter your password')
console.log('%c%s', 'color: #e50000', userPassword)

const checkUser = (userName, password) => {
  if ((userName = database[0].userName && password === database[0].password)) {
    console.log(newsFeed.timeLine)
  } else {
    return `${userNamePrompt} your password is broken yo.`
  }
}

const checkUserResult = checkUser(userNamePrompt, userNamePrompt)
console.log(checkUserResult)
console.log(database)
