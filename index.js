// Hyper Text Transfer Protocol
// format
// client - server
// browser - server
// https: //wwww.google.com
// example of https is place of apache and tomcat are used for java  application 
// module: file,package,module
// routing 
// git -> github -> push
// git -> pull

const http = require('http')
function handler(req, res){
    // streams
    res.write("Hello Node Api");
    res.write("Second line");
    res.end()
}

//Call back function 
const server = http.createServer(handler);
const port = 3000;


server.listen(port, () => {
    console.log('server is running on ${port}');
});


