
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parent_aids').del()
    .then(function () {
      // Inserts seed entries
      return knex('parent_aids').insert([
        {
          first_name: 'Joe',
          last_name: 'Sando',
          middle_initial: 'R',
          number_of_children: 3,
          agency_name: 'example agency',
          phone_number: 1234567890,
          email: 'joekorsan@gmail.com',
          pw: '123456'
        }
      ]);
    });
};
