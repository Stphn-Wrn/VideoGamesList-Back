import games from '../Models/games.js'
import gameValidation from '../Validation/gameValidation.js';
const getAll = (req, res) => {};
const getOne = (req, res) => {};

const createOne = (req, res) => {
  const { body } = req
  const { error } = gameValidation(body)
  if (error) return res.status(401).json(error.details[0].message)

  games.create({...body})
  .then(() => {
    res.status(201).json({ msg: 'Created game'})
  })
  .catch(error => res.status(500).json(error))
};

const updateOne = (req, res) => {};
const deleteOne = (req, res) => {};

export { getAll, getOne, createOne, updateOne, deleteOne }