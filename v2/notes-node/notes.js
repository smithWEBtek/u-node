console.log('Starting notes.js .........');

// console.log('module: ', module)


module.exports.age = 25;
module.exports.today = new Date()
module.exports.asdf = function () {
	console.log("your lottery number is: ", (Math.random() * 100).toFixed(2))
}

module.exports.addNote = () => {
	console.log('addNote was called in notes.js file');
	return 'New note....in notes.js file'
}

module.exports.multiplyTwo = (a, b) => {
	console.log('multiplyTwo was called in notes.js file');
	console.log('the product is: ', a * b);
	return a * b
}

module.exports.addTwo = (a) => {
	console.log(`addTwo was called with: ${a}`);
	console.log('the sum is: ', a + 2);
	return a + 2
}

module.exports.runChunk = () => {
	let new_arr = []
	let arr = (1, 100)
	console.log('first draft arr: ', arr);
}

