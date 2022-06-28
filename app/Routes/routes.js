import { Router } from 'express';

 import { getAll, getOne, deleteOne, createOne, updateOne  } from '../Controllers/games.controllers.js';
import {register, login, getUser, logout}  from '../Controllers/users.controllers.js';
import { checkToken } from '../Middleware/user.middleware.js';



const router = Router();

router.get('/getAll', getAll);
router.get('/getOne/:id', getOne);
router.post('/createOne', createOne);
router.put('/updateOne/:id', updateOne);
router.delete('/deleteOne/:id', deleteOne);


router.post('/register', register);
router.post('/login', login);
router.get('/user', checkToken, getUser);
router.get('/logout', checkToken, logout);

 router.all('/*',  (req, res) => res.status(400).json({'error': 'Bad Request.'}))

export default router;