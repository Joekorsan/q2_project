var knex = require('../db/knex');
const nodemailer = require('nodemailer');

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

        res.render('volunteer_homepage', {
          schedules
        })

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
      // create reusable transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        tls: true,
        auth: {
          user:  'nonprofitaz4@gmail.com',
          pass: 'non-profit'
        }
      });

      // setup email data with unicode symbols
      let mailOptions = {
        from: '"From: Express " <gzsgee6az2pjt52y@ethereal.email>', // sender address
        to: 'joekorsan@gmail.com', // list of receivers seperated by comma
        subject: 'Email From Express', // Subject line
        text: 'test', // plain text body
        html: '<b>Hello world?</b>' // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.redirect('/volunteer/auth/homepage');

      });

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
