import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.send('hola')
})


module.exports = server;