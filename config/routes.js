const pa = require('../controllers/pa.js');
const v = require('../controllers/v.js');
const admin = require('../controllers/admin.js');
const kiosk = require('../controllers/kiosk.js')


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




//////MIDDLEWARE
  app.use(validatePath);

  app.get('/pa/schedule',pa.schedule); app.post('/pa/schedule', pa.postSchedule)

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




const validatePath = (req, res, next)=>{
  console.log('Path::::: ',req.path);

  let pa = req.path;
  let volunteer = req.path;
  let admin = req.path;
  let kiosk = req.path;

  if(admin == '/admin/homepage'){
    console.log("I AM COMING FROM ADMIN SITE")
    if (req.session.admin){
      next();
    } else {
      res.redirect('/admin')
    }
  } else if (volunteer == '/volunteer/homepage' || req.session.volunteer) {
    console.log("I AM COMING FROM VOLUNTEER SITE")
    if (req.session.volunteer) {
      next();
    } else {
      res.redirect('/volunteer/login');
    }
  } else if (pa == '/pa/schedule' ){
    if (req.session.pa) {
      next();
    } else {
      res.redirect('/pa/login');
    }
  } else if (kiosk == '/kiosk/pa'){
    console.log("I AM COMING FROM KIOSK P.A. SITE")
  } else if (kiosk == '/kiosk/parent'){
    console.log('I AM COMING FROM KIOSK PARENT SITE ')
    next();
  }

}
