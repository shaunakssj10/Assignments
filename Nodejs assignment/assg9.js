var fs = require('fs');

fs.readFile("text.txt", 'utf8', function(err, text) {  

    var data = text.split(' ');
    console.log(data);
});