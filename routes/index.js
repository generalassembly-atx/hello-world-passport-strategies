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

router.get('/auth/github',
  passport.authenticate('github'));

router.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), function(req, res) {
  // Successful authentication, redirect home.
  console.log("hello");
  res.redirect('/');
});



module.exports = router;
