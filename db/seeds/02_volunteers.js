
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('volunteer').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteer').insert([
        {
          username: 'volunteer',
          pw: '123456'
        },

      ]);
    });
};
