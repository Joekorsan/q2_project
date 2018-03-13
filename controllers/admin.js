var knex = require('../db/knex');

module.exports = {

  //get admin Login
  login: (req, res) => {
    res.render('admin_login')
  },

  //get admin homepage
  homepage: (req, res) => {
    res.render('admin_homepage')
  }





}// end of exports
