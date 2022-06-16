import User from '../Models/users.model.js'
import userValidation from '../Validation/users.validation.js';
import bcrypt from 'bcrypt';

const createUser = (req, res) => {
  
 const salt_round = 10;
 const { email, password, repeat_password } = req.body;
 const salt = bcrypt.genSaltSync(salt_round);
 let hashedPassword = bcrypt.hashSync(password, salt);
 let hashedPassword2 = bcrypt.hashSync(repeat_password, salt);
 const user = {
  email,
  password: hashedPassword,
  repeat_password: hashedPassword2
 }

  const { error } = userValidation(user)
  if (error) return res.status(401).json(error.details[0].message)

  User.create(user)
  .then(() => {
    res.status(201).json({ message: 'New user' })
  })
  .catch((error) => res.status(500).json(error))
};


const deleteUser = (req, res) => {
  user.destroy()
  .then(ressource => {
    if(ressource === 0) return res.status(404).json({ message: 'Not found.' })
    res.status(200).json({ message: 'Deleted user' })
  })
  .catch((error) => res.status(500).json(error))
};

export { deleteUser, createUser  }