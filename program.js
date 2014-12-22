var fs   = require('fs');
var path = require('path');

var filepath = process.argv[2];
var filter = process.argv[3];

fs.readdir(filepath, function(err, lists){
    if(err) throw err;

    for(var i=0; i<lists.length; i++){
	var pathString = path.extname(lists[i]);
	if( pathString === ('.'+filter) ){
	    console.log(lists[i]);
	}
    }
    
});

