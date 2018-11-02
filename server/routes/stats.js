const express = require('express');

const router = express.Router();

router.get('/active', (req, res) => {
    console.log(`This is req - ${req}`);
})

module.exports = router;