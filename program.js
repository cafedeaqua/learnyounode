var fs=require('fs');

var contents = fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if(err){
	throw err;
    }
    var lines = data.toString().split('\n').length - 1;
    console.log(lines);
});


