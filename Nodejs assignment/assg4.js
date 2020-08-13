var fs=require('fs');

file=process.argv[2];

fs.writeFile('assg4.txt',file,function(err){
    console.log('The file was saved!');
});