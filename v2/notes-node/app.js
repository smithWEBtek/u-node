console.log('Starting app.js ........');


const fs = require('fs');
const os = require('os');
const _ = require('lodash')
const notes = require('./notes.js')
const arrays = require('./arrays.js')

// console.log('true or false? ', _.isString(true));
// console.log('true or false? ', _.isString('abc'));

// console.log(arrays.pets);
console.log(arrays.mix2);

console.log(_.uniq(arrays.mix2));
