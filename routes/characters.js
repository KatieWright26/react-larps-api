const express = require('express');

const router = express.Router();
const { Character } = require("../knex");

// CREATE characters
router.post('/', function(req, res, next) {
  new Character({ name: req.body.name, larp_id: req.body.larp_id })
    .save(null, { method: "insert" })
    .then(character => res.json({ character }))
    .catch(error => res.json({ error }));
});

/* READ characters */
router.get('/', function(req, res, next) {
  Character.fetchAll({ withRelated: ["larp"] })
    .then(characters => res.json({ characters }))
    .catch(error => res.json({ error }));
});

// UPDATE characters
router.patch('/', function(req, res, next) {
  Character.where({ id: req.body.id })
    .save({ name: req.body.name }, { patch: true })
    .then(character => res.json({ character }))
    .catch(error => res.json({ error }));
});

// DELETE characters
router.delete('/', function(req, res, next) {
  Character.where({ id: req.body.id})
    .destroy()
    .then(character => res.json({ character }))
    .catch(error => res.json({ error }));
});

module.exports = router;
