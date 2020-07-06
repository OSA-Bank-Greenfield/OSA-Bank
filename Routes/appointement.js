const router = require('express').Router();

// UserInformations Model
const Appointement = require('../models/appointement.model.js');

/**
 * @route   GET api/users
 * @desc    Get all users
 * @access  Private
 */

router.route('/').post((req, res) => {
  var appointement = new Appointement(req.body);
  appointement.save(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
    res.end();
  });
});

router.route('/').get((req, res) => {
  Appointement.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
    res.end();
  });
});
module.exports = router;
