import express, {Application, Request, Response} from 'express';
const mongoose = require('mongoose')

const server: Application = express();

mongoose
  .connect('mongodb://localhost:27017/myTestDb')
  .then(() => {
    console.log('MongoDb Connected successfuly');
  })
  .catch((err: any) => {
    console.log(err);
  })

const Book = require('./models/Book')

server.get('/', (req: Request, res: Response) => {
  res.send('hola')
})

server.get('/books', async (req: Request, res: Response) => {

  try {
    const books = await Book.find()
    res.send(books)
  } catch (error) {
    console.log(error);
    res.send(error)
  }
 
})


module.exports = server;