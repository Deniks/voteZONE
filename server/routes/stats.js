const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/profile', (req, res) => {
    User.find({}, (err, user) => {
        res.render('profile', {
            username: user
        })
    })
});

router.get('/active', (req, res) => {
    console.log(`This is req - ${req}`);
    res.end(`${req.session.passport.user}`)
});

router.get('/dashboard', (req, res) => {

})




module.exports = router;