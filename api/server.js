const express = require('express');
const helmet = require('helmet');
const cors = require('cors')

const usersRouter = require('./users/users-router') 

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors()) // cors() returns a (req, res, nex) => { // stuff and then next() }

server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use((err, req, res, next) => { // eslint-disable-line   
res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
    })
})

module.exports = server;