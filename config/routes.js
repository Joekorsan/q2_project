const pa = require('../controllers/pa.js');
const v = require('../controllers/v.js');
const admin = require('../controllers/admin.js');
const kiosk = require('../controllers/kiosk.js');


module.exports = function(app) {


  // get pa login page
  app.get('/', pa.login);

  //get pa sign up
  app.get('/pa/login',pa.login); app.post('/pa/login', pa.validate); app.get('/pa/signup', pa.signup); app.post('/pa/signup',pa.postSignup); app.get('/pa/logout' , pa.logout);

  // get volunteer login and post
  app.get('/volunteer/login', v.login); app.post('/volunteer/login', v.validate); app.get('/volunteer/logout', v.logout);

  //get admin Login // post admin login
  app.get('/admin', admin.login); app.post('/admin', admin.loginPost);

  //get kiosk checkin
  app.get('/kiosk', kiosk.checkin);


//SECURE MIDDLEWARE
  app.use('/admin/auth', validateAdmin);
  app.use('/volunteer/auth', validateVolunteer);
  app.use('/pa/auth', validatePa);




// //////MIDDLEWARE
//   app.use(validatePath);


  app.get('/pa/auth/schedule',pa.schedule); app.post('/pa/auth/schedule', pa.postSchedule);

  //app.get('/volunteer//login', v.login)
  // get volunteer homepage
  app.get('/volunteer/auth/homepage', v.homepage);

  // get volunteer pa input
  app.get('/volunteer/auth/invite', v.invite); app.post('/volunteer/auth/invite' , v.postInvite)

  //if i went this route, i would only need to create one login contolller to handle
  //all of the routes for everybodys login without having to use auth in as a buffer.
  //that was each route can be protected due by it's specific middleware.
  //the bottom route would be redirected by the to login if the auth is not PASSED.
  //and when it is passed then it would allow access to whatever route is being accessed.

  // app.get('/login/volunteer', login.volunteer)

  //get admin homepage
  app.get('/admin/auth/homepage', admin.homepage)

  //get admin edit scheduled visit PAGE
  app.get('/admin/auth/homepage/edit/visit/:id', admin.editVisitPage)


  //update scheduled visits
  app.post('/admin/auth/homepage/edit/visit/:id', admin.updateVisit)


  //remove a visit
  app.get('/admin/auth/homepage/remove/visit/:id', admin.removeVisit)

  //get admin edit pa
  app.get('/admin/auth/homepage/edit/pa/:id', admin.editPaPage)


  //update admin edit Pa
  app.post('/admin/auth/homepage/edit/pa/:id', admin.updatePA)

  //remove pa
  app.get('/admin/auth/homepage/remove/pa/:id', admin.removePa);

  // get admin edit volunteer page
  app.get('/admin/auth/homepage/edit/vol/:id', admin.editVolPage)

  //update admin edit volunteer
  app.post('/admin/auth/homepage/edit/vol/:id', admin.updateVol)

  //get admin pa sign up
  app.get('/admin/auth/homepage/pa/signup', admin.getSignup)

  //post admin pa sign up
  app.post('/admin/auth/homepage/pa/signup', admin.postSignup)

  //get Metrics
  app.get('/admin/auth/metrics', admin.metrics)


  //get kiosk for pa
  app.get('/kiosk/pa', kiosk.pa)

  //get kiosk for parent
  app.get('/kiosk/parent', kiosk.parent)

}//end of module.exports



const validatePa = (req, res, next) => {
  req.session.pa || req.session.admin || req.session.volunteer ? next() : res.redirect('/pa/login');
}
const validateVolunteer = (req, res, next) => {
  //console.log('req', req.session)
  req.session.admin || req.session.volunteer ? next() : res.redirect('/volunteer/login');
}

const validateAdmin = (req, res, next) => {
  req.session.admin ? next() : res.redirect('/admin');
}
