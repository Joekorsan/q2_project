var knex = require('../db/knex')

module.exports = {

  // get pa login page
  login: (req, res) => {
    res.render('pa_login')
  },
  //get pa signup
  signup: (req, res) => {
    res.render('pa_signup')
  },


  schedule: (req,res) => {
    res.render('pa_schedule');
  },

  validate: (req, res) =>{
    
  }


} // end of module exports
