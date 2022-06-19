import games from '../Models/games.model.js'
import gameValidation from '../Validation/game.validation.js';


const getAll = (req, res) => {
  games.findAll({
    attributes: {exclude: ['createdAt', 'updatedAt']}
  })
  .then(games => {
    const { error } = userValidation(user)
   if (error) return res.status(401).json(error.details[0].message)
  })
  .catch((error) => res.status(500).json(error))
};


const getOne = (req, res) => {
  const { id } = req.params
  games.findByPk(id) // findByPrimaryKey
  .then(games => {
    if(!games) return res.status(404).json( {message: 'Game not found.' })
    res.status(200).json(games)
  })
  .catch((error) => res.status(500).json(error))
};

const createOne = (req, res) => {
  const { body } = req
  const { error } = gameValidation(body)
  if (error) return res.status(401).json(error.details[0].message)

  games.create({ ... body})
  .then(() => {
    res.status(201).json({ message: 'Created game' })
  })
  .catch((error) => res.status(500).json(error))
};

const updateOne = (req, res) => {
  const { id } = req.params
  const { body } = req;

  games.findByPk(id)
  .then(games => {
    if(!games) return res.status(404).json({ message: 'Game not found.' })
    games.title = body.title;
    games.editor = body.editor;
    games.style = body.style;
    games.platform = body.platform;
    games.description = body.description; 
    games.save()
    .then(() => res.status(200).json({ message: 'Updated game' }))
    .catch((error) => res.status(500).json(error))
  })
  .catch((error) => res.status(500).json(error))
};

const deleteOne = (req, res) => {
  const { id } = req.params;
  games.destroy( {where: {id: id} })
  .then(ressource => {
    if(ressource === 0) return res.status(404).json({ message: 'Not found.' })
    res.status(200).json({ message: 'Deleted game' })
  })
  .catch((error) => res.status(500).json(error))
};

export { getAll, getOne, createOne, updateOne, deleteOne }