var fs = require('fs')
var total = 0

var read = fs.readFile('num.txt', 'utf-8', function (err, data) {
    if (err) throw err;

    var number = data.split(' ');
    var result = number.reduce(function (total, num) {
        return total + Number(num);
    }, 0)
    console.log(result)
})