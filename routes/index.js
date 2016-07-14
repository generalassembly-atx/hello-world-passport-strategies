var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', user: req.user });
});

router.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/' })
);

router.get('/auth/twitchtv', passport.authenticate('twitchtv'));

router.get('/auth/twitchtv/callback', 
  passport.authenticate('twitchtv', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);
module.exports = router;
