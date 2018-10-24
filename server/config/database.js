require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE);
const db = mongoose.connection;

// Check connection
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', (err) => {
  console.log(`An error occured ===> ${err}`);
});

module.exports = db;
