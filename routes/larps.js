const express = require('express');

const router = express.Router();
const knex = require('../knex');

// CREATE larps
router.post('/', function(req, res, next) {
  knex('larps')
    .insert({ name: req.body.name })
    .then(larp => res.json({ larp }))
    .catch(error => res.json({ error }));
});

/* READ larps */
router.get('/', function(req, res, next) {
  knex
    .select()
    .table('larps')
    .then(larps => res.json({ larps }))
    .catch(error => res.json({ error }));
});

// UPDATE larps
router.patch('/', function(req, res, next) {
  knex('larps')
    .where('id', req.body.id)
    .update({ name: req.body.name })
    .then(larp => res.json({ larp }))
    .catch(error => res.json({ error }));
});

// DELETE larps
router.delete('/', function(req, res, next) {
  knex('larps')
    .where('id', req.body.id)
    .del()
    .then(larp => res.json({ larp }))
    .catch(error => res.json({ error }));
});

module.exports = router;
