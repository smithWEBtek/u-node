const getNotes = require('./notes.js')
const chalk = require('chalk');

function add(a, b) {
  return parseInt(a) + parseInt(b)
}
function subtract(a, b) {
  return parseInt(a) - parseInt(b)
}
function multiply(a, b) {
  return parseInt(a) * parseInt(b)
}
function divide(a, b) {
  return parseInt(a) / parseInt(b)
}

const result = () => {
  if (process.argv[2] === 'add') {
    output = add(process.argv[3], process.argv[4])
  } else if (process.argv[2] === 'multiply') {
    output = multiply(process.argv[3], process.argv[4])
    debugger
  } else if (process.argv[2] === 'subtract') {
    output = subtract(process.argv[3], process.argv[4])
  } else if (process.argv[2] === 'divide') {
    output = divide(process.argv[3], process.argv[4])
  }
}

result()
console.log('Your result is: ', output)
