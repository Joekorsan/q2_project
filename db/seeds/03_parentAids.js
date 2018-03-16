
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
          agency_name: 'example agency',
          phone_number: '(234)567-8902',
          email: 'joekorsan@gmail.com',
          pw: 'jj77'
        },
        {
          first_name: 'Noel',
          last_name: 'Serrato',
          middle_initial: 'W',
          agency_name: 'example agency',
          phone_number: '(123)456-7890',
          email: 'serrato@gmail.com',
          pw: 'ss77'
        },
        {
          first_name: 'Tessal',
          last_name: 'Gonzo',
          middle_initial: 'H',
          agency_name: 'example agency5',
          phone_number: '(345)678-9045',
          email: 'tessagonzo@gmail.com',
          pw: 'tt77'
        },
        {
          first_name: 'Brii',
          last_name: 'Oldy',
          middle_initial: 'S',
          agency_name: 'exampleee agent-see',
          phone_number: '(567)890-9027',
          email: 'bribriiiiee@gmail.com',
          pw: 'bb77'
        },
        {
          first_name: 'Caterine',
          last_name: 'Lulu',
          middle_initial: 'G',
          agency_name: 'exampleole agenn-shee',
          phone_number: '(678)908-3021',
          email: 'catcat@gmail.com',
          pw: 'cc77'
        }
      ]);
    });
};
