console.log('Starting notes.js ...');

// console.log(module);

const myDog = 'Fido';
const yourDog = 'Buffy';
const theCat = 'Felix';

addNote = () => {
	console.log('addNote');
	return 'Waldo is here now.'
};

passNote = (text) => {
	console.log('passNote');
	return text.toUpperCase()
};

function addNumbers(a, b) {
	console.log('addNumbers');
	return a + b
}



// module.exports = { myDog }; 
// module.exports.dog_name_attribute = myDog; 
// module.exports.dog_name_attribute = yourDog; 

// module.exports.addNote = () => {
// 	console.log('addNote');
// 	return 'Waldo is here now.'
// };

module.exports = { myDog, yourDog, theCat, addNote, passNote, addNumbers };

module.exports.multiplyNumbers = (a, b) => {
	console.log('multiplyNumbers');
	return a * b;
}
