import express, {Application, Request, Response} from 'express';

const server: Application = express();

server.get('/', (req: Request, res: Response) => {
  res.send('hola')
})


module.exports = server;