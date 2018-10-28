console.log('starting app.js ........');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

console.log('true or false? ', _.isString('abc'));

var testArr = notes.runChunk();
console.log("the testArr: ", testArr);
var prod = notes.multiplyTwo(3, 4)
var res = notes.addNote();
// console.log("zxcv: ", notes.addNote());

// var sum = notes.addTwo(5)


// Original line
// fs.appendFile('greetings.txt', 'Hello world!');
// TypeError [ERR_INVALID_CALLBACK]: Callback must be a function

// Option one
fs.appendFile('greetings.txt', 'Hello world!', function (err) {
	if (err) {
		console.log('Unable to write to file');
	}
});

// Option two
// fs.appendFileSync('greetings.txt', 'Hello world!');

//////////////////////////////////////////////////////////////////////

const user = os.userInfo()


// fs.appendFile('userData.md', `Hello, my username is:  ${user.username.toUpperCase()} you are age: ${notes.age}.`, function (err) {
// 	if (err) {
// 		console.log('Unable to write to file');
// 	}
// });


// fs.appendFile('userData.md', `Today is: ${notes.today}.`, function (err) {
// 	if (err) {
// 		console.log('Unable to write to file');
// 	}
// });

// notes.asdf()

