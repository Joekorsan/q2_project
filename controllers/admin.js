var knex = require('../db/knex');

module.exports = {

  //get admin Login
  login: (req, res) => {
    if(!req.session.admin){
      req.session.admin = []
    }

      res.render('admin_login')
    },


    loginPost: (req, res) => {
      knex('admin')
      .where('username', req.body.username)
      .then((admin)=>{
        admin=admin[0];
        if(!admin){
          res.redirect('/admin')
          return
    }

    if(admin.pw === req.body.pw){
      req.session.admin = admin;
      console.log(req.session.admin)
      req.session.save(()=>{
        res.redirect('/admin/homepage')
      })
    }
    })
  },


  //get admin homepage
  homepage: (req, res) => {
    knex('schedule')
    .fullOuterJoin('parent_aids', 'schedule.parent_aids_id', 'parent_aids.id')
    .then((results)=>{
        knex('volunteer')
        .then((info)=>{
          res.render('admin_homepage', {schedule:results, volunteer:info})
        })

    })
  },





}// end of exports
