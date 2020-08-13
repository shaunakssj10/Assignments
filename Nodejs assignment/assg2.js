var fs = require('fs');
var readFile = process.argv[2];

console.log('Reading ' + readFile);
var readMe = fs.readFileSync(readFile, 'utf8');
console.log(readMe);