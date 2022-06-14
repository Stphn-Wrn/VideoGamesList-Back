import { Router } from 'express';
import cors from 'cors';
import { getAll, getOne, createOne, updateOne, deleteOne } from '../Controllers/controllers.js';
import { createUser, deleteUser } from '../Controllers/userControllers.js';

const router = Router();

router.get('/getAll', cors(), getAll);
router.get('/getOne/:id', cors(), getOne);
router.post('/createOne', cors(), createOne);
router.put('/updateOne/:id', cors(), updateOne);
router.delete('/deleteOne/:id', cors(), deleteOne);

router.post('/createUser', cors(), createUser);
router.delete('/deleteUser/', cors(), deleteUser);
export default router;