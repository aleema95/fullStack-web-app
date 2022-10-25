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
const server = (0, express_1.default)();
mongoose
    .connect('mongodb://localhost:27017/myTestDb')
    .then(() => {
    console.log('MongoDb Connected successfuly');
})
    .catch((err) => {
    console.log(err);
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
module.exports = server;
