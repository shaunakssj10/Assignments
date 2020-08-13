var fs = require('fs');

fs.readdir(__dirname, function (err, files) {
    files.forEach(function (file) {
       if(fs.statSync(file).isDirectory()){
           console.log('DIR:' +file);
       }
       else{
           console.log("FILE:" +file)
       }
    });
});