require('dotenv').config();
const mongoose = require('mongoose');
const Gridfs = require('gridfs-stream');
mongoose.connect(process.env.DATABASE);
const db = mongoose.connection;

const mongoDriver = mongoose.mongo;
const gfs = new Gridfs('uploads', mongoDriver);
/* Init stream
gfs = Grid(db.db, mongoose.mongo);
gfs.collection('uploads');
*/

// Check connection
db.once('open', () => {
  console.log('Connected to MongoDB');
})


// Check for DB errors
db.on('error', (err) => {
  console.log(`An error occured ===> ${err}`);
});

module.exports = {
  db: db,
  gfs: gfs
}
