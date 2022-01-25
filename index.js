var http = require("http");
var fs = require('fs');
const PORT = process.env.PORT || 8080;



http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-origin' : '*'
    });
    var readStream = fs.createReadStream(__dirname + '/index.html');
    readStream.pipe(response)
}).listen(PORT);




   

console.log('Server running at http://127.0.0.1: ${ PORT }/')