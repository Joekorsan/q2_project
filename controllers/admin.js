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
      //console.log(req.session.admin)
      req.session.save(()=>{
        res.redirect('/admin/auth/homepage')
      })
    }
    })
  },


  //get admin homepage
  homepage: (req, res) => {
    if(!req.session.admin){
      req.session.admin = []
    }


    knex('parent_aids')
    .fullOuterJoin('schedule', 'schedule.parent_aids_id', 'parent_aids.id')
    .then((results)=>{
      knex('parent_aids')
      .then((pa)=>{
        knex('volunteers')
        .then((info)=>{
          //console.log(pa);
          res.render('admin_homepage', {schedule:results, volunteer:info, pa:pa})
      })
        })
    })
  },

  //get admin edit scheduled visit PAGE
  editVisitPage: (req, res) => {
    knex("schedule")
    .innerJoin("parent_aids", 'schedule.parent_aids_id', 'parent_aids.id')
    .where('schedule.id', req.params.id)
    .then((results)=>{
        //console.log(results)
        //console.log(req.params.id)

        res.render('admin_edit_visit', {schedule:results})
      })
  },

  //update scheduled visits
  updateVisit: (req, res) => {
    knex('schedule')
    .where('id', req.params.id)
    .update({
      parent_name: req.body.parent_name,
      number_of_children: req.body.number_of_children
    }, '*')
    .then((schedule)=>{
      let parent_aids_id = schedule[0].parent_aids_id;
      knex('parent_aids')
      .where('id', parent_aids_id)
      .update({
        first_name: req.body.first_name,
        last_name: req.body.last_name
      })
      .then((data)=>{
        //console.log(data)
        res.redirect('/admin/auth/homepage')
      })
    })
  },

  //remove visit
removeVisit: (req, res) => {
  knex.select("id", "parent_name", "number_of_children", "appt_date", "created_at", "updated_at")
  .from('schedule')
  .where('id', req.params.id)
  .delete()
    .then(()=>{
      res.redirect('/admin/auth/homepage')
    })
},

  //get admin edit pa page
  editPaPage: (req, res)=>{
    knex('parent_aids')
    .where('id', req.params.id)
    .then((results)=>{
      //console.log(results)
      res.render('admin_edit_pa', {pa:results})
    })
  },

  //update admin edit pa
  updatePA: (req, res) => {
    knex('parent_aids')
    .where('id', req.params.id)
    .update ({
      first_name: req.body.first_name,
      middle_initial: req.body.middle_initial,
      last_name: req.body.last_name,
      agency_name: req.body.agency_name,
      phone_number: req.body.phone_number,
      email: req.body.email,
      pw: req.body.pw
    }).then(()=>{
      res.redirect('/admin/auth/homepage')
    })
  },

  //remove pa
  removePa: (req, res) => {
    knex('parent_aids')
    .where('id', req.params.id)
    .delete()
    .then(()=>{
      res.redirect('/admin/auth/homepage')
    })
  },

  //get admin edit volunteer page
  editVolPage: (req, res) => {
    knex('volunteers')
    .where('id', req.params.id)
    .then((results)=>{
      res.render('admin_edit_vol', {volunteer:results})
    })
  },

  //update admin edit volunteer
  updateVol: (req, res) => {
    knex('volunteers')
    .where('id', req.params.id)
    .update({
      username: req.body.username,
      pw: req.body.pw
    }).then(()=>{
      res.redirect('/admin/auth/homepage')
    })
  },

  //post admin pa sign up
  postSignup: (req,res) =>{
    knex('parent_aids')
    .insert({
      first_name : req.body.first_name,
      middle_initial: req.body.middle_initial,
      last_name: req.body.last_name,
      agency_name: req.body.agency_name,
      phone_number: req.body.phone_number,
      email: req.body.email,
      pw: req.body.pw,
    })
    .then(()=>{
        res.redirect('/admin/auth/homepage');
      })
  },

  //get sign up page
  getSignup: (req, res) => {
    res.render('admin_signup_pa')
  },

  //get metrics


}// end of exports
