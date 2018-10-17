const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// Bring in User Model
const User = require('../models/user');

// Register Form
router.get('/sing-up', (req, res) => {
  res.render('register');
});
router.get('/profile', (req, res) => {
  res.render('profile');
});


// Register Proccess
router.post('/sign-up', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const password2 = req.body.password2;

  req.checkBody('firstName', 'fName is required').notEmpty();
  req.checkBody('lastName', 'lName is required').notEmpty();
  req.checkBody('username', 'username is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  const errors = req.validationErrors();

  if (errors) {
    console.log(errors);
    res.redirect('/users/sign-up')
  } else {
    const newUser = new User({
      firstName,
      lastName,
      username,
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
                        res.redirect('/users/log-in');
                    }
                });
      });
    });
  }
});

// Login Form
router.get('/log-in', function(req, res){
  res.render('login');
});

router.get('/profile', (req, res) => {
  User.find({}, (err, user) => {
    res.render('profile', {
      users: user
    })
  });
});

// Login Process
router.post('/log-in', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect:'/dashboard/experience',
    failureRedirect:'/',
    failureFlash: true
  })(req, res, next);
  console.log('log in - success');
});

// logout, just add href attribute to something with value of "users/log-out"
router.get('/log-out', function(req, res){
  req.logout();
  req.flash('success', 'You are logged out');
  res.redirect('/users/log-in');
});

module.exports = router;
