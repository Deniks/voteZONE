const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PollSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Poll = module.exports = mongoose.model('Poll', PollSchema);