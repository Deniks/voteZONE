const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const User = module.exports = mongoose.model('User', UserSchema);
