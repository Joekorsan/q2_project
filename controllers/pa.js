var knex = require('../db/knex')
let sendEmail = require('./mailer.js');
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
        res.render("pa_login",{err: 'Incorrect Username and/or Password', paObj: []})
      }
    })
    .catch((err)=>{
      console.log(err);
      res.render("pa_login",{err: 'Incorrect Username and/or Password', paObj: []})
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
    knex("schedule")
    .where("schedule.parent_aids_id" , req.session.pa.id)
    .then((result)=>{
      res.render('pa_schedule',{ paObj : req.session.pa , schedules: result});
    })
  },
  postSchedule: (req,res) =>{
    let confirmationCode = ()=>{
      return Math.floor(Math.random() * (9000 - 1000) + 1000 );
    };
    let gen_code = confirmationCode().toString();
    // console.log(`Confirmation Number is ${cf_num} -- TYPE:  `,typeof(cf_num));

    // setup email data with unicode symbols
    knex("parent_aids")
    .where('parent_aids.id',req.session.pa.id)
    .then((result)=>{
      let mailOptions = {
        from: '"From: AZ4CHILDREN " <nonprofitaz4@gmail.com>',
        to: result[0].email,
        subject: 'Schedule Confirmation Code',
        text: `ENTER THIS CODE AT THE KIOSK - ${gen_code}`,
        html: ''
      };
      sendEmail(mailOptions);
    })


    knex("schedule")
    .insert({
      parent_aids_id : req.session.pa.id,
      parent_firstName : req.body.parent_firstName ,
      parent_lastName : req.body.parent_lastName ,
      number_of_children : req.body.number_of_children ,
      appt_date: req.body.app_date,
      conf_code: gen_code
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
