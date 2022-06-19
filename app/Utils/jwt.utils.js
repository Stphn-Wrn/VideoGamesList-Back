import jwt from 'jsonwebtoken';
import { secret, ttl } from '../Config/jwt.config.js';

function verifyToken(token){
const tokenVerified = jwt.verify(token, secret); 
return tokenVerified;
}

function createToken(data){ 
   const token = jwt.sign(data, secret, { expiresIn: ttl });
   return token;
 }

export { verifyToken, createToken }