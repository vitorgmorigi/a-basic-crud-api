const express = require('express');
const routes = require('./routes');

const server = express();

server.use(express.json());
server.use(routes);

// global middleware
server.use((req, res, next) => {
    console.log(`URL chamada: ${req.url}`);

   return next();
});

server.listen(3000);