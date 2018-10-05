const express = require('express');
const router = express.Router();

const Poll = require('../models/poll');
const User = require('../models/user');

router.get('/add', /* CHECK THE USERS MODEL OF BRAD  */ (req, res) => {
    res.render('add_poll', {
        title: 'Add Poll'
    });
});   

router.post('/add', (req, res) => {
    req.checkBody('title', 'Title is required').notEmpty();
    req.checkBody('description', 'Description is required').notEmpty();

    let errors = req.validationErrors();

    if (errors) {
        res.render('add_poll', {
            title: 'Add poll',
            errors: errors
        });
    } else {
        let poll = new Poll();
        poll.title = req.body.title;
        poll.description = req.body.description;

        article.save(err => {
            if (err) {
                
            }
        });
    }
});