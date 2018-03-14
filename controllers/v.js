var knex = require('../db/knex');

module.exports = {

  //get volunteeer Login
  login: (req, res) => {
    res.render('volunteer_login')
  },

  //get volunteer homepage
  homepage: (req, res) => {
    knex('schedule')
    .innerJoin('parent_aids', 'schedule.parent_aids_id', 'parent_aids.id')
    .then((schedules)=>{

      res.render('volunteer_homepage', {schedules})

    })

  },

  //get volunteer pa inout
  pa: (req, res) => {
    res.render('volunteer_input_pa')
  },

  validate:(req,res)=>{
    knex('volunteers').where('username', req.body.username)
    .then((volunteers)=>{
      if(volunteers[0]){
        req.session.volunteer = volunteers[0];
        req.session.save(()=>{
          res.redirect('/volunteer/auth/homepage');
          return;
        })
      }else{
        res.redirect('/volunteer/login');
      }

    })//end of .then()

},//end of validate

logout:(req,res)=>{
  req.session.destroy();
  res.redirect('/volunteer/login');
}


} // end of module exports
