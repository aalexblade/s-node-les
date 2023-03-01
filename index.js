
const http = require('http');

const PORT = 8081;

const requestHandler = (request, response) => {

    if (request.url.indexOf('/home') >= 0) {
        response.writeHead(200, { 'Content-type': 'text/json' });
        // response.end('<h1>Goit</h1>');
    return response.end('{"url": "homepage"}');
    }
       response.writeHead(200, { 'Content-type': 'text/json' });
        // response.end('<h1>Goit</h1>');
    return response.end('{"url": "other"}');
};

const server = http.createServer(requestHandler);

server.listen(8081, (error) => {
    if (error) {
        console.error('Error at server launch:', error);
    }
    console.log(`Seerver works at port ${PORT}`);
});