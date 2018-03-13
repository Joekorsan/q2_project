
exports.up = function(knex, Promise) {
  return knex.schema.createTable('volunteers', (table)=>{
    table.increments();
    table.string('username');
    table.string('pw');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('volunteers')
};
