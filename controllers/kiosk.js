var knex = require('../db/knex');

module.exports = {

  checkin: (req, res) => {
    res.render('kiosk_checkin')
  },

  pa: (req, res) => {
    res.render('kiosk_pa', {err:''})
  },

  parent: (req, res) => {
    res.render('kiosk_parent', {err:''})
  },

  paCheckIn:(req, res)=>{
    knex('schedule').where('conf_code', req.body.code)
    .then((schedule)=>{
      let checkedIN = false;

      if (schedule[0]) {
        knex('schedule')
        .where('conf_code', schedule[0].conf_code)
        .update({
          conf_code:null,
          pa_checkin: true
        }, '*').then(()=>{
          knex('parent_aids')
          .where('id', schedule[0].parent_aids_id)
          .then((pa)=>{
            console.log(pa[0]);
            res.render('kiosk_pa_welcome', {schedule: schedule[0], pa:pa[0]})
          })
        })
      }else{
        res.render('kiosk_pa', {err: `This Code does not exist ${req.body.code} does not exist in our system
        please re-enter code or see front desk`})
      }
    })
  },

  parentCheckIn:(req, res)=>{
    knex('schedule').where({
      parent_firstName: req.body.parent_firstName,
      parent_lastName: req.body.parent_lastName
    }).select('parent_firstName', 'parent_lastName')
    .then((parent)=>{
      console.log('parent:::: ', parent);
      if (parent[0]) {
        res.render('kiosk_parent_welcome', {parent:parent[0]})
      }else{
        res.render('kiosk_parent', {err: `The name ${req.body.parent_firstName} ${req.body.parent_lastName} was not found in our system
        please re-enter name or see front desk`})
      }


    })
  }


} //end of module
