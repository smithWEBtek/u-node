const validator = require('validator')
// import validator from 'validator';not supported yet

const getNotes = require('./notes.js')

getNotes()

// const msg = getNotes()

// console.log(msg)

console.log(getNotes())

let email = "andrew@example.com"
let url = 'asdfdotcom'

console.log('is this a valid email? ', validator.isEmail(email))
console.log(email)


console.log('is this a valid url?: ', validator.isURL(url))
console.log(url)
