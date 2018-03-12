
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {
          name: 'Tessa',
          email: 'tessaleego@gmail.com',
          pw: '123456'
        },

      ]);
    });
};
