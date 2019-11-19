
exports.up = function(knex) {
  return knex.schema.table("larps", function(table) {
    table.string("description")
  });
};

exports.down = function(knex) {
  return knex.schema.table("larps", function(table) {
    table.dropColumn("description")
  });
};
