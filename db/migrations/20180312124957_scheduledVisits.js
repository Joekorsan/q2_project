
exports.up = function(knex, Promise) {
  return knex.schema.createTable('schedule', (table)=>{
    table.increments();
    table.integer('parent_aids_id')
      .references('id')
      .inTable('parent_aids')
      .onDelete('CASCADE')
      .index();
    table.string("parent_name");
    table.integer("number_of_children");
    table.string('appt_date');
    table.string('conf_code');
    table.boolean('parent_checkin').defaultTo(false);
    table.boolean('pa_checkin').defaultTo(false)
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('schedule')
};
