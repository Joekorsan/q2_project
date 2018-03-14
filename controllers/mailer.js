const nodemailer = require('nodemailer');

module.exports = function(mailOptions){
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      tls: true,
      auth: {
        user:  'nonprofitaz4@gmail.com',
        pass: 'non-profit'
      }
    });
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
  }
