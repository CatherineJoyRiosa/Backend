import * as BookController from '../Controller/BookController.js';
import express from 'express';

const bookRoutes = express.Router();

bookRoutes.get('/all', BookController.fetchBooks);
// bookRoutes.post('/new', BookController.createBooks);

export default bookRoutes;
