var knex = require('../db/knex')

module.exports = {

  // get pa login page
  login: (req, res) => {
    res.render('pa_login')
  },

  // get pa homepage
  homepage: (req, res) => {
    res.render('pa_homepage')
  },

  //get pa signup
  signup: (req, res) => {
    res.render('pa_signup')
  },



} // end of module exports
