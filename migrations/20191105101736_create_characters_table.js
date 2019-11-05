exports.up = function(knex) {
  return knex.schema.createTable('characters', function(table) {
    table.increments();
    table
      .integer('larp_id')
      .unsigned()
      .notNullable();
    table.string('name');
    table.timestamps();
    // table
    //   .foreign('larp_id')
    //   .references('id')
    //   .inTable('larps');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('characters');
};
