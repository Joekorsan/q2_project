
exports.up = function(knex, Promise) {
  return knex.schema.createTable('parent_aids', (table)=>{
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('middle_initial');
    table.string('agency_name');
    table.string('phone_number');
    table.string('email');
    table.string('pw');
    table.timestamps(true, true);
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('parent_aids')
};
