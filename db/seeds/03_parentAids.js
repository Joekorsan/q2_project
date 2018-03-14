
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parent_aids').del()
    .then(function () {
      // Inserts seed entries
      return knex('parent_aids').insert([
        {
          id: 1,
          first_name: 'Joe',
          last_name: 'Sando',
          middle_initial: 'R',
          agency_name: 'example agency',
          phone_number: 1234567890,
          email: 'joekorsan@gmail.com',
          pw: '123456'
        }
      ]);
    });
};
