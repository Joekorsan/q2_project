exports.up = function(knex, Promise) {
  return knex.schema.createTable('admin', (table)=>{
    table.increments();
    table.string('first_name');
    table.string('last_name')
    table.string('username');
    table.string('pw');
    table.timestamps(true, true);
  }
)
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admin');
};
