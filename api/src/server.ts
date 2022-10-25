import express, {Application, Request, Response} from 'express';
const mongoose = require('mongoose')
const Book = require('./models/Book')

const server: Application = express();

mongoose
  .connect('mongodb://localhost:27017/myTestDb')
  .then(() => {
    console.log('MongoDb Connected successfuly');
  })
  .catch((err: any) => {
    console.log(err);
  })


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

server.post('/book', async (req: Request, res: Response) => {

  try {
    const newBook = await Book({
      title: 'Nombre',
      author: 'Desc',
    })

    await newBook.save()
    
    res.send('Success')
  } catch (error) {
    console.log(error);
    res.send('Failure')
  }

})

server.delete('/book/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Book.deleteOne({ _id: id })

    res.send('Success')
  } catch (error) {
    console.log(error);
    res.send('Failure')
  }

})

module.exports = server;