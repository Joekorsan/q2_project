var knex = require('../db/knex');

module.exports = {

  //get admin Login
  login: (req, res) => {
    res.render('admin_login')
  },

  //get admin homepage
  homepage: (req, res) => {
    knex('schedule')
    .then((results)=>{
      knex('parent_aids')
      .then((data)=>{
        knex('volunteer')
        .then((info)=>{
          res.render('admin_homepage', {schedule:results, parentAids:data, volunteer:info})
        })
      })
    })
  }





}// end of exports
