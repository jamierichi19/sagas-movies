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

  module.exports = router;