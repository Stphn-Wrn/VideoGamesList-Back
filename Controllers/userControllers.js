import user from '../Models/users.js'
import userValidation from '../Validation/userValidation.js';


const createUser = (req, res) => {
  const { body } = req
  const { error } = userValidation(body)
  if (error) return res.status(401).json(error.details[0].message)

  user.create({ ... body})
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