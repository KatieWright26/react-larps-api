const config = require('./knexfile');
const knex = require('knex')(config[process.env.NODE_ENV || 'development']);
const bookshelf = require('bookshelf')(knex);

const Larp = bookshelf.model("Larp", {
  hasTimestamps: true,
  tableName: "larps",
  characters() {
    return this.hasMany("Character");
  }
});

const Character = bookshelf.model("Character", {
  hasTimestamps: true,
  tableName: "characters",
  larp() {
    return this.belongsTo("Larp");
  }
});

module.exports = { knex, Character, Larp };
