const fs = require('fs');
const os = require('os');

const username = (
	'==============================\n' +
	`Username: ${os.userInfo().username}\n` +
	`Platform: ${os.platform()}\n` +
	`Hostname: ${os.hostname()}\n` +
	'==============================\n'
)

fs.appendFileSync('user.txt', username);


// option one
// fs.appendFile('greetings.txt', `Welcome, hello world! \n${new Date()}`, function (err) {
// 	if (err) {
// 		console.log('Unable to write to file');
// 	}
// });

// option two
// fs.appendFileSync('greetings.txt', `Welcome, hello there! \n${new Date()}`);


const osKeys = Object.keys(os).map((key, i) => {
	return `${i}: ${key}\n`
})

const fsKeys = Object.keys(fs).map((key, i) => {
	return `${i}: ${key}\n`
})

const globalKeys = Object.keys(global).map((key, i) => {
	return `${i}: ${key}\n`
})

const processKeys = Object.keys(process).map((key, i) => {
	return `${i}: ${key}\n`
})

const greeting = `Hello there ${os.userInfo().username.toUpperCase()}`

const allKeys = (
	"The OS keys: \n" + osKeys + "\n\n" +
	"The FS keys: \n" + fsKeys + "\n\n" +
	"The global keys: \n" + globalKeys + "\n\n" +
	"The process keys: \n" + processKeys + "\n\n"
)