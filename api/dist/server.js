"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose = require('mongoose');
const Book = require('./models/Book');
const bodyParser = require('body-parser');
const server = (0, express_1.default)();
mongoose
    .connect('mongodb://localhost:27017/myTestDb')
    .then(() => {
    console.log('MongoDb Connected successfuly');
})
    .catch((err) => {
    console.log(err);
});
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
server.get('/', (req, res) => {
    res.send('hola');
});
server.get('/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield Book.find();
        res.send(books);
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
}));
server.post('/book', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBook = yield Book({
            title: 'Nombre',
            author: 'Desc',
        });
        yield newBook.save();
        res.send('Success');
    }
    catch (error) {
        console.log(error);
        res.send('Failure');
    }
}));
server.delete('/book/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield Book.deleteOne({ _id: id });
        res.send('Success');
    }
    catch (error) {
        console.log(error);
        res.send('Failure');
    }
}));
server.put('/book/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, author } = req.body;
    try {
        const updatedBook = yield Book.updateOne({ _id: id }, {
            title,
            author
        });
        res.send('success');
    }
    catch (error) {
        console.log(error);
        res.send('Failure');
    }
}));
module.exports = server;
