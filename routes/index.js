'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', (req, res, next) => {
    const { user } = req;
    res.render('home', { user });
});

router.get('/login/facebook', passport.authenticate('facebook'));

router.get('/login/linkedin', passport.authenticate('linkedin'));

router.get('/login/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

//router.get('/return', 
//  passport.authenticate('facebook', { failureRedirect: '/' }),
//  (req, res, next) => {
//    res.redirect('/');
//});

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res, next) => {
    res.redirect('/');
});

router.get('/auth/linkedin/callback',
  passport.authenticate('linkedin', { failureRedirect: '/', successRedirect: '/' }),
  (req, res, next) => {
    res.redirect('/');
});

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res, next) => {
    res.redirect('/');
});

module.exports = router;
