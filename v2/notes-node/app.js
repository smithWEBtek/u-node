console.log('Starting app.js ........');
console.log('You are at 9:53 of Simplified Input With Yargs ');



const fs = require('fs');
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv;
// .argv is where yargs library stores its version of process.argv
var command = process.argv[2]

console.log("Command: ", command);
console.log('Process', process.argv);
console.log('Yargs', argv);
// _: in argv is where commands are stored in an array


if (command === 'add') {
	let note = notes.addNote(argv.title, argv.body)
	fs.appendFileSync('notesList.txt', `${note.title}: ${note.body}, \n`, function (err) {
		if (err) {
			console.log('Unable to write to file');
		}
	});
} else if (command === 'list') {
	console.log('Listing all notes ...');
} else if (command === 'read') {
	console.log('Reading note ...');
} else if (command === 'remove') {
	console.log('Removing note ...');
} else if (command === 'today') {
	console.log('Today is: ', notes.showDate().toDateString());
	console.log('Time is: ', notes.showDate().toLocaleTimeString());
	console.log('Lodash now: ', _.now());
} else {
	console.log('Command not recognized.');
}