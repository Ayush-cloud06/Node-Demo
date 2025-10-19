
const http = require('http');
const fs = require('fs');
const url = require('url');

const data = fs.readFileSync(`${__dirname}/Db.json`, 'utf-8');
const userData = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = url.parse(req.url, true).pathname;

    if (pathName === '/' || pathName === '/users') {
        res.end('This is the user page');
    } else if (pathName === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(userData));
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
});