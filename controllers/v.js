var knex = require('../db/knex');

module.exports = {

  //get volunteeer Login
  login: (req, res) => {
    res.render('volunteer_login')
  },

  //get volunteer homepage
  homepage: (req, res) => {
    res.render('volunteer_homepage')
  },

  //get volunteer pa inout
  pa: (req, res) => {
    res.render('volunteer_input_pa')
  },

  validate:(req,res)=>{

  }







} // end of module exports
