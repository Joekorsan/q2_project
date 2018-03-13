
exports.up = function(knex, Promise) {
  return knex.schema.createTable('schedule', (table)=>{
    table.increments();
    table.integer('parent_aids_id')
      .references('id')
      .inTable('parent_aids')
      .onDelete('CASCADE')
      .index();
    table.string("parent_name");
    table.int("number_of_children");
    table.date('appt_date');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('schedule')
};
