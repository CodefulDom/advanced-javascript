let database = [
  {
    userName: 'dom',
    password: 'password'
  }
]

let newsFeed = [
  {
    user: 'dom',
    timeLine: 'So tired'
  }
]

let userNamePrompt = prompt('What is your username?')

let userPassword = prompt('Enter your password')

const checkUser = (userName, password) => {
  if (userName === database[0].userName && password === database[0].password) {
    console.log(newsFeed)
  } else {
    return `${userNamePrompt} your password is broken yo.`
  }
}

const checkUserResult = checkUser(userNamePrompt, userPassword)
