const express = require('express');
const router = express.Router();
const User = require('../../models/user');

router.get('/users', (req, res) => {
    User.find({}, (err, user) => {
        res.send(user)
        console.log(user);
    });
});

router.get('/personal', (req, res) => {
    // For user registration data fetching
});

module.exports = router;