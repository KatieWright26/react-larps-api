const express = require('express');

const router = express.Router();
const knex = require('../knex');

// CREATE characters
router.post('/', function(req, res, next) {
  knex('characters')
    .insert({ name: req.body.name, larp_id: req.body.larp_id })
    .then(character => res.json({ character }))
    .catch(error => res.json({ error }));
});

/* READ characters */
router.get('/', function(req, res, next) {
  knex
    .select()
    .table('characters')
    .then(characters => res.json({ characters }))
    .catch(error => res.json({ error }));
});

// UPDATE characters
router.patch('/', function(req, res, next) {
  knex('characters')
    .where('id', req.body.id)
    .update({ name: req.body.name })
    .then(character => res.json({ character }))
    .catch(error => res.json({ error }));
});

// DELETE characters
router.delete('/', function(req, res, next) {
  knex('characters')
    .where('id', req.body.id)
    .del()
    .then(character => res.json({ character }))
    .catch(error => res.json({ error }));
});

module.exports = router;
