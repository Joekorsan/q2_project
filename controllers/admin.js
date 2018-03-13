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
        knex('volunteers')
        .then((info)=>{
          res.render('admin_homepage', {schedule:results, volunteer:info})
        })

    })
  },

  //get admin edit scheduled visit PAGE
  editVisitPage: (req, res) => {
    knex('schedule')
    .innerJoin('parent_aids', 'schedule.parent_aids_id', 'parent_aids.id')
    .where('schedule.id', req.params.id)
    .then((results)=>{
        //console.log(results)
        res.render('admin_edit_visit', {schedule:results})
      })
  },

  //update scheduled visits
  update: (req, res) => {
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
        console.log(data)
        res.redirect('/admin/homepage')
      })
    })
  },





}// end of exports
