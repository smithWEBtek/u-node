console.log('Starting app.js');


const fs = require('fs');
const os = require('os')
const notes = require('./notes.js')

var res = notes.addNote()

console.log(res);

fs.appendFile('Greetings.txt', notes.add(9, 3), (err) => {
	if (err) {
		console.log('cowa bunga man');
	}
})

console.log(notes.add(9, -2))