
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schedule').del()
    .then(function () {
      // Inserts seed entries
      return knex('schedule').insert([
        {
          parent_aids_id: 1,
          appt_date: '2018-03-19'
        }
      ]);
    });
};
