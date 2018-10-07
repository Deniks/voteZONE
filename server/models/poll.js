const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PollSchema = new Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    description: {
        type: String,
        required: true
    },
    finishDate: {
        type: String,
        required: true
    }

});

const Poll = module.exports = mongoose.model('Poll', PollSchema);
