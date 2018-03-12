
exports.up = function(knex, Promise) {
  return knex.schema.createTable('visits', (table)=>{
    table.increments();
    table.integer('client_id')
      .references('id')
      .inTable('client')
      .onDelete('CASCADE')
      .index();
    table.date('timestamp');
    table.boolean('approved');
    table.integer('approved_by')
      .references('id')
      .inTable('employees')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('visits')
};
