var knex = require('../db/knex')

module.exports = {

  // get pa login page
  login: (req, res) => {
    res.render('pa_login',{err:''})
  },
  //get pa signup
  signup: (req, res) => {
    res.render('pa_signup')
  },
  validate: (req,res) =>{
    knex("parent_aids")
    .where({
      email : req.body.email,
      pw : req.body.password
    })
    .then((result)=>{
      console.log(result);
      if(result.length != 0){
        req.session.pa = result[0];
        req.session.save(()=>{
          res.redirect('/pa/auth/schedule');
        })
      }else{
        res.render("pa_login",{err: 'user not found', paObj: []})
      }

    })
    .catch((err)=>{
      console.log(err);
      res.render("pa_login",{err: 'user not found', paObj: []})
    })
  },
  postSignup: (req,res) =>{
    knex("parent_aids")
    .insert({
      first_name : req.body.first_name,
      middle_initial: req.body.middle_initial,
      last_name: req.body.last_name,
      agency_name: req.body.agency_name,
      phone_number: req.body.phone_number,
      email: req.body.email,
      pw: req.body.pw
    })
    .then((result)=>{
      res.redirect('/');
    })
  },
  schedule: (req,res) => {
    console.log(req.session.pa);
    res.render('pa_schedule',{ paObj : req.session.pa});
  },
  postSchedule: (req,res) =>{
    knex("schedule")
    .insert({
      parent_aids_id : req.session.pa.id,
      parent_name : req.body.parent_name ,
      number_of_children : req.body.number_of_children ,
      appt_date: req.body.app_date

    })
    .then((result)=>{
      res.redirect("/pa/auth/schedule");
    })
  },
  logout: (req,res)=>{
    req.session.destroy();
    res.redirect('/pa/login');
  }



} // end of module exports
