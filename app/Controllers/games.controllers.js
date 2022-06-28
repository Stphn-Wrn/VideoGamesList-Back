import connection from '../Config/db.config.js';

// Find all Games
const getAll = (req, res) => {
  try{
    connection.query('SELECT * FROM Games', (err, rows, fields) => {
      if (!err)
      res.status(200).json(
        rows
      );
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Some errors occured",
      err
    });
  } 
};

// Find Game by ID
const getOne = (req, res) => {
  const { id } = req.params;
  try{
    connection.query('SELECT * FROM Games WHERE id = ?',[id], (err, rows, fields) => {
     if (!err)
     res.status(200).json(
       rows
     );
     else next(err);
   });
 } catch (err) {
   console.log(err);
   res.status(400).json({
     message: "Some errors occured",
     err
   });
 } 
};

// Delete game by ID
const deleteOne = (req, res) => {
  try{
    connection.query('DELETE FROM Games WHERE id = ?',[req.params.id], (err, rows, fields) => {
     if (!err)
     res.status(200).json(
       { message: 'Games deleted'}
     );
     else next(err);
   });
 } catch (err) {
   console.log(err);
   res.status(400).json({
     message: "Some errors occured",
     err
   });
 } 
};

const createOne = (req, res) => {
  try {
    let values = [req.body.title, req.body.editor, req.body.platform, req.body.description];
    connection.query('INSERT INTO Games (title, editor, platform, description) VALUES (?)', [values], (err, rows, fields) => {
    if(!err) {
      res.status(200).json(
        { message: `New game add : title -> ${req.body.title} - editor -> ${req.body.editor} - platform -> ${req.body.platform} - description -> ${req.body.description}` })
      }
    })
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Some errors occured",
      err
    });
  }
};

const updateOne = (req, res) => {
try {
  const itemsToModify = req.body;
  const sql = "UPDATE Games SET title = ?, editor = ?, platform = ?, description = ? WHERE id = ?";
  const params = [itemsToModify.title, itemsToModify.editor, itemsToModify.platform, itemsToModify.description, req.params.id];
  connection.query(sql, params, (err, rows, fields) => {
    if (!err) {
      res.status(200).json(
        { message: `Game updated : title -> ${itemsToModify.title} - editor -> ${itemsToModify.editor} - platform -> ${itemsToModify.platform} - description -> ${itemsToModify.description}` })
    }
  })
} catch (err) { 
  console.log(err);
  res.status(400).json({
    message: "Some errors occured",
    err
  });
}
};


export { getAll, getOne, deleteOne, createOne, updateOne }