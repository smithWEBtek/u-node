console.log("Starting app.js ...");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// var res = notes.addNote();

// fs.appendFileSync('And this just in ...', notes.addNote());
// fs.appendFileSync('greetings.txt', res);
fs.appendFileSync('greetings.txt', notes.addNote() + '\n');
fs.appendFileSync('greetings.txt', notes.passNote('Hey where is that dog? \n\n'));

fs.appendFileSync('greetings.txt', `Last number picked: ${notes.addNumbers(4, -2)}. \n\n`)

fs.appendFileSync('greetings.txt', `Numbers multiplied: ${notes.multiplyNumbers(3, 7)}`)

// var user = os.userInfo();

// option one
// fs.appendFile('greetings.txt', `Welcome, hello world! \n${new Date()}`, function (err) {
// 	if (err) {
// 		console.log('Unable to write to file');
// 	}
// });

// option two
// fs.appendFileSync('greetings.txt', `Welcome, hello there ${user.username}! \n 
// Today is: ${new Date()} \n 
// and it looks like your doggy friend, ${notes.yourDog} has joined us. \n 
// I hope ${notes.yourDog} will be friends with my dog ${notes.myDog}. \n
// In any case, likely neither ${notes.yourDog} or ${notes.myDog} will get along with the awful cat ${notes.theCat}!`);

