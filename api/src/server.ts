import express, {Application, Request, Response} from 'express';
const mongoose = require('mongoose')
const Book = require('./models/Book')
const bodyParser = require('body-parser');

const server: Application = express();

mongoose
  .connect('mongodb://localhost:27017/myTestDb')
  .then(() => {
    console.log('MongoDb Connected successfuly');
  })
  .catch((err: any) => {
    console.log(err);
  })

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


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

server.put('/book/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, author } = req.body;

  try {
    const updatedBook = await Book.updateOne({ _id: id }, {
      title,
      author
    })

    res.send('success')
  } catch (error) {
    console.log(error);
    res.send('Failure')
  }

})

module.exports = server;