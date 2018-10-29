const express = require('express');
const router = express.Router();
const Polls = require('../../models/poll');

router.get('/polls', (req, res, next) => {
    Polls.find({}, (err, poll) => {
        console.log(poll);
        res.send(poll);
    });
});

module.exports = router;

