const express = require('express');
const router = express.Router();
const Polls = require('../../models/poll');

router.get('/polls', (req, res, next) => {
    Polls.find({}, (err, poll) => {
        if (err) return next(err);
        res.json(poll);
    });
});
router.get('/:id', (req, res, next) => {
    Polls.findById(req.params.id, (err, poll) => {
        if (err) return next(err);
        res.json(poll);
    })
});
module.exports = router;

