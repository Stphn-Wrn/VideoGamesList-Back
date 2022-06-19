import jwt from 'jsonwebtoken';
import { secret, ttl } from '../Config/jwt.config.js';

const verifyToken = (token) => { jwt.verify(token, secret); }

const createToken = (data) => { jwt.sign(data, secret, { expiresIn: ttl }); }

export { verifyToken, createToken }