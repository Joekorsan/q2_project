const pa = require('../controllers/pa.js');
const v = require('../controllers/v.js');
const admin = require('../controllers/admin.js');
const kiosk = require('../controllers/kiosk.js')


module.exports = function(app) {


  // get pa login page
  app.get('/', pa.login);

  //get pa sign up
  app.get('/pa/signup', pa.signup);

  // get volunteer login
  app.get('/volunteer', v.login);

  //get admin Login
  app.get('/admin', admin.login);

  //get kiosk checkin
  app.get('/kiosk', kiosk.checkin);




//////MIDDLEWARE


  //get pa homepage
  app.get('/pa/homepage', pa.homepage)

  // get volunteer homepage
  app.get('/volunteer/homepage', v.homepage)

  // get volunteer pa input
  app.get('/volunteer/pa', v.pa)

  //get admin homepage
  app.get('/admin/homepage', admin.homepage)

  //get kiosk for pa
  app.get('/kiosk/pa', kiosk.pa)

  //get kiosk for parent
  app.get('/kiosk/parent', kiosk.parent)
}
