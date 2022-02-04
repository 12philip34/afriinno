const http = require("http")
const fs = require("fs")

const port = 6066
http.createServer(function (request, response) {

    response.writeHead(200,{"content-type":"text/html"});
    var url =request.url;

    if(url === "/") {

        response.writeHead(200,{"content-type":"text/html"});

        var file = fs.createReadStream("africinnovate.html");
        file.pipe(response);
    }
})
    .listen(port, function (){
        console.log("server start at port:"+ port);
    });