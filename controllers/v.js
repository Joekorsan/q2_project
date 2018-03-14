var knex = require('../db/knex');
const nodemailer = require('nodemailer');
let sendEmail = require('./mailer.js');

module.exports = {

  //get volunteeer Login
  login: (req, res) => {
    res.render('volunteer_login')
  },

  //get volunteer homepage
  homepage: (req, res) => {
    knex('schedule')
      .innerJoin('parent_aids', 'schedule.parent_aids_id', 'parent_aids.id')
      .then((schedules) => {

        res.render('volunteer_homepage', {schedules})

      })

  },

  //get volunteer pa inout
  invite: (req, res) => {
    res.render('volunteer_input_pa')
    //fill this spot
  },
  postInvite: (req, res) => {
    let pa_email = req.body.pa_email;
    console.log('email');
    //email logic

      console.log("This node mail has been called");

      let mailOptions = {
        from: '"From: AZ4CHILDREN " <nonprofitaz4@gmail.com>',
        to: pa_email, // list of receivers seperated by comma
        subject: 'Invite to P.A Login',
        text: 'localhost:8000/pa',
        html: ''
      };
      sendEmail(mailOptions);
      res.redirect('/volunteer/auth/homepage')
  },

  validate: (req, res) => {
    knex('volunteers').where('username', req.body.username)
      .then((volunteers) => {
        if (volunteers[0]) {
          req.session.volunteer = volunteers[0];
          req.session.save(() => {
            res.redirect('/volunteer/auth/homepage');
            return;
          })
        } else {
          res.redirect('/volunteer/login');
        }

      }) //end of .then()

  }, //end of validate

  logout: (req, res) => {
    req.session.destroy();
    res.redirect('/volunteer/login');
  }


} // end of module exports
