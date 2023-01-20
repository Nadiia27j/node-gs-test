// console.log(process.env.nadiia);
// console.log(process.env.oleg);
// console.log(process.env.PORT);
// console.log(process.env.NODE_ENV);
// console.log(process.argv);

// cjm           es6 modules
// require('') vs import

// require('./calculator');
// require('./OOP');


const { request, response } = require('express');
const express = require('express');
const server = express();
// console.log(server);

server.get('/contacts', (request, response) => {
    // console.log(request.url);
    // console.log(request.method);
    // console.log(request.headers);
    response.send('<h2>Contacts page<h2>');
})

server.get('/', (request, response) => {
    response.send('<h2>Home page<h2>')
})

server.listen(3000, () => console.log("Server running"));