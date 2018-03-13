
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        {
          first_name: 'Noel',
          last_name: 'Serrato',
          username: 'serrato123',
          pw: '123456'
        }
      ]);
    });
};
