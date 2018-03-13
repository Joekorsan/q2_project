
exports.up = function(knex, Promise) {
  return knex.schema.createTable('volunteers', (table)=>{
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('pw');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('volunteers')
};
