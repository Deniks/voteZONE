const express = require('express');
const router = express.Router();
const Polls = require('../../models/poll');

router.get('/polls', (req, res) => {
    Polls.find({}, (err, user) => {
        res.send(user);
        console.log(user);
    });
    console.log(req.sessionId);
});

module.exports = router;