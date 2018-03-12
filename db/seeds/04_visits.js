
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('visits').del()
    .then(function () {
      // Inserts seed entries
      return knex('visits').insert([
        {
          client_id: 1,
          timestamp: '2018-03-19',
          approved: false,
          approved_by: 1
        }
      ]);
    });
};
