const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Bring in User Model
const User = require('../models/user');

// Register Form
router.get('/register', (req, res) => {
  res.render('register');
});

// Register Proccess
router.post('/register', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const password2 = req.body.password2;

  req.checkBody('firstName', 'fName is required').notEmpty();
  req.checkBody('lastName', 'lName is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  const errors = req.validationErrors();

  if (errors) {
    res.render('register', {
      errors,
    });
  } else {
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) {
          console.log(err);
        }
        newUser.password = hash;
        newUser.save((err) => {
                    if (err) {
                        console.log(err);
                        
                    } else {
                        req.flash('success', 'You are now registered and can log in');
                        console.log("user is registred")
                        res.redirect('/users/login');
                    }
                });
      });
    });
  }
});

// Login Form
router.get('/login', (req, res) => {
  res.render('login');
});

// Login Process
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true,
  })(req, res, next);
});

// logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;
