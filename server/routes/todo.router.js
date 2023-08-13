const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
 
  const sqlText = `SELECT * FROM tasks ORDER BY name, origin DESC;`;
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
  const tasks = req.body;
  const sqlText = `INSERT INTO tasks (task, complete)
                   VALUES ($1, $2)`;

  pool.query(sqlText, [tasks.task, tasks.complete])
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

// DELETE

module.exports = router;
