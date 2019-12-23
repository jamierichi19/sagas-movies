const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

 // return all genres by movie id
 router.get(`/:id`, (req, res) => {
    let queryText = `SELECT  "genres"."name" FROM "movies" 
    JOIN "movies_genres" ON "movies_genres"."movie_id" = "movies"."id" 
    JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id" Where "movies"."id" = $1;`;
    pool.query( queryText, [req.params.id] )
    .then( result => {
      res.send( result.rows)
    }).catch( error =>{
      console.log( 'error with get', error)
      res.sendStatus( 500 )
    })
  });

  module.exports = router;