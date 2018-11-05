require('dotenv');

const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const requiredLogin = require('../controllers/auth');
const passport = require('passport');
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const gfs = require('../config/database').gfs
const GridFsStorage = require('multer-gridfs-storage');
// Bring in User Model
const User = require('../models/user');

const storage = new GridFsStorage({
  url: process.env.DATABASE,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage });
// Register Form
router.get('/sing-up', (req, res) => {
  res.render('register');
});


router.post('/dashboard/experience', upload.single('file'), (req, res, next) => {
  console.log(gfs.files.find().toArray((err, files) => {
      // Check if files
      if (!files || files.length === 0) {
        res.send('no files')
      } else {
        files.map(file => {
          if (
            file.contentType === 'image/jpeg' ||
            file.contentType === 'image/png'
          ) {
            file.isImage = true;
          } else {
            file.isImage = false;
          }
        });
        res.send(files);
      }
  }))
  res.end('It worked');
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
router.get('/log-in', (req, res) => {
  res.render('login');
});

// Login Process
router.post('/log-in', (req, res, next) => {
  /*const sid = req.sessionID;
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({username: username, password: password}, (err, result) => {
    sessionStorage.destroy(result.session, () => User.update({id: result._id}, {$set: {"session": sid}}));
  })
  */
  passport.authenticate('local', {
    successRedirect: '/stats/dashboard',
    failureRedirect: '/',
    failureFlash: true
  })(req, res, next);
});

// logout, just add href attribute to something with value of "users/log-out"
router.get('/log-out', (req, res, next) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) return next(err)
      else return res.redirect('/users/log-in')
    });
  }
  /*               ALTERNATIVE VARIANT
  req.logout();
  req.flash('success', 'You are logged out');
  res.redirect('/users/log-in');
  */
});



module.exports = router;