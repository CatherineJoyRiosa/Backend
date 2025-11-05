import * as BookController from '../Controller/BookController.js';
import express from 'express';

const bookRoutes = express.Router();

bookRoutes.get('/all', BookController.fetchBooks);

bookRoutes.post('/new', BookController.createBook);
bookRoutes.post('/edit/ :bookId', BookController.editBook);
bookRoutes.post('/delete :bookId', BookController.deleteBook);

export default bookRoutes;


