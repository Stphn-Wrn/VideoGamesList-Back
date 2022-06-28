import connection from '../Config/db.config.js';
import bcrypt from 'bcrypt';
import { createToken } from '../Utils/jwt.utils.js';
import { ttl } from '../Config/jwt.config.js';
import cache from '../Utils/cache.utils.js';

async function register (req, res){
  
  connection.query('SELECT email FROM Users WHERE email= ?',req.body.email, (err, result) => {
    if (err) throw err;
    if (result.length>0){
      res.status(400).json({ message: "user already registered" });
    }
  });
  const generatePassword = async (hashedPassword) => {
    return await new Promise((res, rej) => {
      bcrypt.hash(hashedPassword, 10, (err, hash) => {
        if (err) rej(err);
        res(hash);
      });
    });
  };
  const password = await generatePassword(req.body.password)
  const values = [req.body.email, password, req.body.firstname, req.body.name];
  connection.query('INSERT INTO Users (email, password, firstname, name) VALUES (?)', [values], (err, rows, fields) => {
          if (!err) {
            res.status(200).json({ message: 'New user add' })
          }
        })
      }
 
const login = (req, res) => {
  connection.query('SELECT * FROM Users WHERE email = ?', req.body.email, (error, results, fields) => {
    if(error) throw error;
    else {
      if (results.length > 0) {
        bcrypt.compare(req.body.password, results[0].password, (err, result) => {
          if(result){
            const token = createToken({ id: results.id })
            return res.json({ 
              results,
              access_token: 'Bearer ' + token,
              expires_in: ttl
             });
          }
          else {
            return res.status(400).json({ message: "Invalid password" });
          }
        })
      } else {
        return res.status(400).json({ message: 'Invalid email' })
      }
    }
  })
};
 
 const getUser = (req, res) => {
  try {
    connection.query('SELECT * FROM Users WHERE id = ?', req.body.id, (err, rows, fields) => {
      if(!err){
        res.status(200).json({ message: 'Authenticated' })
      }
    }) 
  }
  catch (error) {
  res.status(400).json({
    message: "Some errors occured",
    err
  });
  }
};

async function logout(req, res){

  const token = req.token;
  const now = new Date();
  const expire = new Date(req.user.exp);
  const milliseconds = now.getTime() - expire.getTime();
  await cache.set(token, token, milliseconds);
  return res.status(200).json({ message: 'Logged out successfully.'})

}


export {register,  login, getUser, logout }