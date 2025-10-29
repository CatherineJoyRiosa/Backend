import * as StudentController from '../Controller/StudentController.js';
import express from 'express';

const studentRoutes = express.Router();

studentRoutes.get('/all', StudentController.fetchStudents);
// bookRoutes.post('/new', BookController.createBooks);

export default studentRoutes;
