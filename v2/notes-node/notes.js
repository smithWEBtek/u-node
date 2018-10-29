console.log('Starting notes.js .........');
var notesCount = 0

var addNote = (title, body) => {
	// console.log('addNote was called in notes.js file');
	console.log('Adding new note: ', title, body)

	let newNote = {}
	newNote['index'] = notesCount + 1
	newNote['title'] = title
	newNote['body'] = body
	console.log('newNote: ', newNote);
	return newNote;
	allNotes();
}

var allNotes = () => {
	notesList.forEach((note, index) => {
		console.log(index + 1, note);
	})
}



module.exports = {
	addNote,
	allNotes
}