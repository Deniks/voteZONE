const express = require('express');
const router = express.Router();

const db = require('../config/database');

const Poll = require('../models/poll');
const User = require('../models/user');


router.get('/create_poll', (req, res) => {
    res.render('create_poll');
});

router.post('/create_poll', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const finishDate = req.body.finishDate;
    const votingLimit = req.body.votingLimit;
    const choices = req.body.choices;
 //   const banner = req.body.banner;
    const hashtags = req.body.hashtags;
    
    req.checkBody('title', 'title is required').notEmpty();
    req.checkBody('description', 'description is required').notEmpty();
    req.checkBody('finishDate', 'finishDate is required').notEmpty();
    req.checkBody('votingLimit', 'votingLimit is required').notEmpty();
    req.checkBody('choices', 'choices are required').notEmpty();
 //   req.checkBody('banner', 'banner is required');
    req.checkBody('hashtags', 'hastags are required');

    const errors = req.validationErrors();

    if (errors) {
        console.log(`Something went wrong 404 => ${JSON.stringify(errors)}`)
        res.render('error');
    } else {
        const newPoll = new Poll({
            title,
            description,
            finishDate,
            votingLimit,
            choices,
   //         banner,
            hashtags
        });
        newPoll.save(err => {
            if (err) console.log(err)
            else {
                req.flash('success', 'Your poll is created you can continue');
                console.log("Poll is created")
                res.redirect('/polls/dashboard');
            }
        });
    }
});

router.get('/vote', (req, res) => {
    Poll.find((err, polls) => {
        if (err) res.send(err);
        res.json(polls);
    });
});


router.get('/dashboard', (req, res) => {
    Poll.find({}, (err, poll) => {
        res.render('dashboard', {
            polls: poll
        })
    });
});
/*
router.get('/:id', (req, res) => {
    Poll.findById(req.params.id, (err, poll) => {

    })
});*/

module.exports = router;