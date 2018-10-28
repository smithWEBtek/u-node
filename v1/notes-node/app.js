console.log("Starting app.js ...");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


console.log('boolean true is a string? ', _.isString(true));
console.log('asdf is a string? ', _.isString('asdf'));

const pets = ['cat', 'dog', 'bird', 'fish', 'wolf', 'frog', 'cat', 'cat', 'dog', 'frog', 'frog']
const uniq = _.uniq(pets);
const sortedUniq = _.sortedUniq(pets);


// console.log('unique values in pets array: ', _.uniq(pets));
console.log('uniq: ', uniq.sort());
console.log('sortedUniq: ', sortedUniq);