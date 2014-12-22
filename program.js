var fs = require('fs');

var filepath = process.argv[2];
//console.log(filepath);
var buffer = fs.readFileSync(filepath);

//console.log(buffer);
//console.log(buffer.toString());

var line = 0;

var strBuffer = buffer.toString();

var bufArray = strBuffer.split('\n');

for(var i=0; i<bufArray.length; i++){
    if( bufArray[i] !== ''){
	line++;
    }
}
console.log(bufArray.length-1);




