
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schedule').del()
    .then(function () {
      // Inserts seed entries
      return knex('schedule').insert([
        {
          parent_name:'John Snow',
          number_of_children: 3,
          appt_date: '2018-03-19',
          conf_code: '123DFGA',

        }
      ]);
    });
};
