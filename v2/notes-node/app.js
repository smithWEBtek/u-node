console.log('Starting app.js ........');

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
	console.log('Adding new note...');
	notes.addNote(argv.title)
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