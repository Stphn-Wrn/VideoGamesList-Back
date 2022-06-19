import { Router } from 'express';
import cors from 'cors';
import { getAll, getOne, createOne, updateOne, deleteOne } from '../Controllers/games.controllers.js';
import { getUser, register, login, logout } from '../Controllers/users.controllers.js';
import { checkToken } from '../Middleware/user.middleware.js';



const router = Router();

router.get('/getAll', cors(), getAll);
router.get('/getOne/:id', cors(), getOne);
router.post('/createOne', cors(), createOne);
router.put('/updateOne/:id', cors(), updateOne);
router.delete('/deleteOne/:id', cors(), deleteOne);


router.post('/register', cors(), register);
router.post('/login', cors(), login);
router.get('/user', cors(), checkToken, getUser);
router.get('/logout', cors(), checkToken, logout);

router.all('/*',  (req, res) => res.status(400).json({'error': 'Bad Request.'}))

export default router;