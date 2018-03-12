
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', (table)=>{
    table.increments();
    table.string('name');
    table.string('email');
    table.string('pw');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees')
};
