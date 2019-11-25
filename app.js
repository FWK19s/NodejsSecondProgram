// const http = require('http');
// http.createServer(function (req, res){
//     res.writeHead(200, {'Content-type': 'text/html'});
//     res.end('Hello Node');
// }).listen(8080);

// const fs = require('fs');
// const output = fs.readFileSync('output.txt');
// console.log(output.toString());
// console.log('End of the program');

// const fs = require('fs');
// fs.readFile('output.txt', function (err, me){
//     if (err) return console.error(err);
//     console.log(me.toString());
// });
// console.log('end of the program');

const fs = require('fs');
console.log('We are going to get file info!');
fs.stat('output.txt', function (err, stats){
if (err) {return console.error(err)
}
console.log(stats);
console.log('this is the file info');
// check the file type
console.log('isFile ?' + stats.isFile());
console.log('isDirectory' + stats.isDirectory());
});
