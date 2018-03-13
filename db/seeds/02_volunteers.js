
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('volunteers').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteers').insert([
        {
          first_name: 'Tessa',
          last_name: 'Gonzales',
          email: 'tessaleego@gmail.com',
          pw: '123456'
        },

      ]);
    });
};
