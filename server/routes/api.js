const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.post('/new', (req, res) => {
    Task.create({
        task: req.body.task
    }, (err, task) => {
        if (err) {
            console.log(`CREATE Error ${err}`);
        } else {
            res.status(200).json(task);
        }
    });
});

