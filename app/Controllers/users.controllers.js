import User from '../Models/users.model.js'
import bcrypt from 'bcrypt';
import { createToken } from '../Utils/jwt.utils.js';
import { ttl } from '../Config/jwt.config.js';
import '../Utils/cache.utils.js';

/**
 * Register function
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
async function register(req, res){

  const isExist = await User.findOne({
    where:{ email: req.body.email }
  })
  if(isExist) {
    return res.status(400).json({ error: 'Email already exists.'});
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = await User.create({
    email: req.body.email,
    password: hashedPassword
  });
  return res.status(200).json(user)
      };

/**
* Login function
* @param {*} req 
* @param {*} res 
* @returns 
*/
async function login(req, res){
  const user = await User.findOne({
    where: { email: req.body.email }
  });

  if(user) {
    const isMatched = await bcrypt.compare(req.body.password, user.password);
    if(isMatched){
      const token = createToken({id: user.id});
  res.json({
        user, 
        access_token: 'Bearer '+token,
        expires_in: ttl
       });
    }
  } else {
    return res.status(500).json();
  }

}

/**
 * getUser function
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
async function getUser(req, res){
  const user = await User.findByPk(req.user.id);
  return res.status(200).json(user)
};

/**
 * LogOut function
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
async function logout(req, res){
  const token = req.token;
  const now = new Date();
  const expire = new Date(req.user.exp);
  const milliseconds = now.getTime() - expire.getTime();

  await cache.set(token, token, milliseconds);
  return res.status(200).json({ message: 'Logged out successfully.'})
}

export { logout, register, login, getUser }