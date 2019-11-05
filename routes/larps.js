const express = require('express');

const router = express.Router();
const { Larp } = require('../knex');

// CREATE larps
router.post('/', function(req, res, next) {
  new Larp({ name: req.body.name }).save(null, {method: 'insert'}).then(larp => res.json({ larp })).catch(error => res.json({ error }));
});

/* READ larps */
router.get('/', function(req, res, next) {
  Larp.fetchAll({ withRelated: ['characters'] })
    .then(larp => res.json(larp))
    .catch(error => res.json({error}));
});

// UPDATE larps
router.patch('/:id', function(req, res, next) {
  Larp.where({ id: req.params.id})
    .save({ name: req.body.name }, { patch: true })
    .then(larp => res.json({larp}))
    .catch(error => res.json({error}))
});

// DELETE larps
router.delete('/:id', function(req, res, next) {
  Larp.where('id', req.params.id)
    .destroy()
    .then(larp => res.json({ larp }))
    .catch(error => res.json({ error }));
});

module.exports = router;
