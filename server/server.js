const express = require('express');
const constants = require('./config/constants');

const app = express();

app.get('/', (req, res) => {
  res.send('server responds!');
});

app.listen(constants.PORT, (err) => {
  if (err) throw err;
  else {
    console.log(`
            Server is running on port ${constants.PORT} 
            =============================
            Running on ${process.env.NODE_ENV}
        `);
    console.log(constants);

  }
});
