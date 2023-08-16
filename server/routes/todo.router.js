const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
 
  const sqlText = `SELECT * FROM tasks ORDER BY id;`;
  pool.query(sqlText)
      .then((result) => {
          console.log(`Got stuff back from the database`, result);
          res.send(result.rows);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500); 
      })
})

// POST
router.post('/', (req, res) => {
  let newTask = req.body;
  let sqlText = `INSERT INTO "tasks" (task, complete)
  VALUES ($1,$2)`

  pool.query(sqlText, [newTask.task, newTask.complete])
      .then((result) => {
          console.log(`Added tasks to the database`, tasks);
          res.sendStatus(201);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500); 
      })
})


// PUT
// router.put('/:id', (req,res) =>{
//     let id =  req.params.id 
//     let queryText = `UPDATE "tasks" SET "rank" = +1 WHERE "id" = $1;`;
//     pool.query(queryText, [id])
//     .then((result) => {
//         res.sendStatus(201);
//     })
//     .catch((err) => {
//         console.log(`Error making query ${queryText}`, err);
//         res.sendStatus(500)
//     })
// })
// DELETE
// router.delete('/:id', (req,res) => {
//     let id = req.params.id;
//     let queryText = `DELETE FROM "tasks" WHERE "id" = $1;`;
//     pool.query(queryText, [id])
//     .then((result) => {
//         res.sendStatus(200);
//     })
//     .catch((err) => {
//         console.log(`Error making query ${queryText}`, err);
//         res.sendStatus(500)
//     })
// })

module.exports = router;
