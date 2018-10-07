const express = require('express');
const router = express.Router();

const Poll = require('../models/poll');
const User = require('../models/user');

router.get('/create_poll', (req, res) => {
    res.render('index');
});

router.post('/create_poll', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const finishDate = req.body.finishDate;

    req.checkBody('title', 'title is required').notEmpty();
    req.checkBody('description', 'description is required').notEmpty();
    req.checkBody('finishDate', 'finishDate is required').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
        res.render('error');
    } else {
        const newPoll = new Poll({
            title,
            description,
            finishDate
        });
    }
});
Poll.create({
    title:  'President',
    description: 'Lorem ipsum dolor sit amet,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,  At vero eos et accusam et justo duo dolores et ea rebum.  Lorem ipsum dolor sit amet,  no sea takimata sanctus est Lorem ipsum dolor sit amet.  Stet clita kasd gubergren,  no sea takimata sanctus est Lorem ipsum dolor sit amet.  no sea takimata sanctus est Lorem ipsum dolor sit amet.  no sea takimata sanctus est Lorem ipsum dolor sit amet.  sed diam voluptua.  ',
    finishDate: '10 october'
})
module.exports = router;