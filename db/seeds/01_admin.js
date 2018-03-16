
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        {
          first_name: 'j',
          last_name: 's',
          username: 'j23',
          pw: 'koko'
        },
        {
          first_name: 'laura',
          last_name: 'p.',
          username: 'laura',
          pw: 'koko'
        }
      ]);
    });
};
