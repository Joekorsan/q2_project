var knex = require('../db/knex');

module.exports = {

  checkin: (req, res) => {
    res.render('kiosk_checkin')
  },

  pa: (req, res) => {
    res.render('kiosk_pa')
  },

  parent: (req, res) => {
    res.render('kiosk_parent')
  }


} //end of module
