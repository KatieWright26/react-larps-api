var express = require('express');
var router = express.Router();
var knex = require('../knex');

/* GET larps listing. */
router.get('/', function(req, res, next) {
  knex.select().table("larps")
    .then((larps) => res.json({ larps }))
    .catch((error) => res.json({ error }))
});

// POST larps
router.post('/', function(req, res, next) {
  knex('larps').insert({ name: req.body.name })
    .then((larp) => res.json({ larp}))
    .catch((error) => res.json({ error }))
});

module.exports = router;
