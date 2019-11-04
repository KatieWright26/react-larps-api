var config = require('./knexfile');
var knex = require("knex")(config[process.env.NODE_ENV || 'development']);

module.exports = knex;