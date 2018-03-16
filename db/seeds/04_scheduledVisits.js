
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schedule').del()
    .then(function () {
      // Inserts seed entries
      return knex('schedule').insert([
        {
          parent_firstName:'John',
          parent_lastName:'Snow',
          number_of_children: 3,
          appt_date: '03/19/2018',
          conf_code: '2917',
          parent_aids_id: 3

        },
        {
          parent_firstName:'Brrrack',
          parent_lastName:'Obeezy',
          number_of_children: 2,
          appt_date: '02/28/2019',
          conf_code: '3728',
          parent_aids_id: 1

        },
        {
          parent_firstName:'John',
          parent_lastName:'Cena',
          number_of_children: 4,
          appt_date: '10/05/2018',
          conf_code: '4545',
          parent_aids_id: 2
        },
        {
          parent_firstName:'Brody',
          parent_lastName:'Brolooms',
          number_of_children: 1,
          appt_date: '07/09/2020',
          conf_code: '2371',
          parent_aids_id: 5

        },
        {
          parent_firstName:'Bart',
          parent_lastName:'Simpson',
          number_of_children: 3,
          appt_date: '08/10/2030',
          conf_code: '5734',
          parent_aids_id: 5

        },
        {
          parent_firstName:'Nick',
          parent_lastName:'Dingusburg',
          number_of_children: 9,
          appt_date: '09/17/2018',
          conf_code: '1367',
          parent_aids_id: 1

        },
        {
          parent_firstName:'Vicky',
          parent_lastName:'Vickerson',
          number_of_children: 6,
          appt_date: '10/23/2019',
          conf_code: '2371',
          parent_aids_id: 3
        },
        {
          parent_firstName:'David',
          parent_lastName:'Dalfy',
          number_of_children: 2,
          appt_date: '07/22/2021',
          conf_code: '2817',
          parent_aids_id: 2
        }

      ]);
    });
};
