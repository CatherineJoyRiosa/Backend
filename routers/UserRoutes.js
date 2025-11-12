import * as UserController from '../Controller/UserController.js';

import express from 'express'

const userRoutes = express.Router();

userRoutes.post('/new', UserController.register);

export default userRoutes;