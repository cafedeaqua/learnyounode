var fs   = require('fs');
var path = require('path');

var filepath = process.argv[2];
var filter = process.argv[3];

fs.readdir(filepath, function(err, lists){
    if(err) throw err;
    
    lists.forEach(function(file){
	if( path.extname(file) === '.'+filter){
	    console.log(file);
	}
    });
});

