
const fs = require('fs');
const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {

    const pathName = url.parse(req.url, true).pathname;

    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the overview');
    } else if (pathName === '/product') {
        res.end('This is the product');
    } else {
        res.writeHead(404, {
            'content-type': 'text/html',
            'my-header': 'Error-404'
        });
        res.end('This page is not found!');
    }


})

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to requests on port 8000');
})






