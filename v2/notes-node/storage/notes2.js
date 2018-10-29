console.log('Starting notes.js .........');

module.exports.addNote = (title) => {
	// console.log('addNote was called in notes.js file');
	console.log(`Your new note is titled: ${title}`)
	return `Your new note is titled: ${title}`
}

module.exports.showDate = () => new Date();
module.exports.showTime = () => new Date().getTime();