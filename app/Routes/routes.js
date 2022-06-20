import { Router } from 'express';

import { getAll, getOne, createOne, updateOne, deleteOne } from '../Controllers/games.controllers.js';
import { getUser, register, login, logout } from '../Controllers/users.controllers.js';
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