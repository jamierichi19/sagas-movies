const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all from movies
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM movies ORDER BY "title" ASC;';
    pool.query( queryText )
    .then( result => {
      res.send( result.rows)
    }).catch( error =>{
      console.log( 'error with get', error)
      res.sendStatus( 500 )
    })
  });

// return Details for selected movie
router.get(`/:id`, (req, res) => {
    let queryText = 'SELECT title, description, id FROM movies WHERE id=$1;';
    pool.query( queryText, [req.params.id] )
    .then( result => {
      res.send( result.rows)
    }).catch( error =>{
      console.log( 'error with get', error)
      res.sendStatus( 500 )
    })
  });

// Edit movie details
router.put('/:id', (req, res) => {
  let movieId = req.params.id;
  let title = req.body.title;
  let description = req.body.description;
  const sqlText = 'UPDATE "movies" SET "title" = $1, "description" = $2 WHERE id = $3;';
  pool.query( sqlText, [title, description, movieId])
    .then( (response) =>{
      res.sendStatus(200)
    }).catch( (error) =>{
      console.log('Error with Edit', error);
      res.sendStatus(500)
    })
})

  module.exports = router;