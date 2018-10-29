const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PollSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    finishDate: {
        type: String,
        required: true
    },
    votingLimit: {
        type: Number,
    },
    choices: {
        type: Array,
        required: true
    },
   /* banner: {
        data: Buffer,
        contentType: String
    },*/
    hashtags: {
        type: Array
    }
});

const Poll = module.exports = mongoose.model('Poll', PollSchema);
