var fs=require('fs');

file=process.argv[2];

fs.writeFile('assg10.txt',file,function(err){
    console.log('The file was saved!');
});

fs.readFile('assg10.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
})