const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Brad!')

fs.appendFileSync('notes.txt', '\n...and I had a great lunch today.')
