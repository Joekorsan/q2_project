
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('volunteers').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteer').insert([
        {
          username: 'volunteers',
          pw: '123456'
        },

      ]);
    });
};
