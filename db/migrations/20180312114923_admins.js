
exports.up = function(knex, Promise) {
  return knex.schema.createTable('admins', (table)=>{
    table.increments();
    table.string('full_name');
    table.string('username');
    table.string('pw');
    table.timestamps(true, true);
  }
)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admins');
};
