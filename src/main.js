const express = require('express');
const mongoose = require('mongoose');

const routeHandler = require('./routeHandler');
const handleListen = require('./handleListen');

const DB_URI = process.env.DB_URI;
mongoose.connect(DB_URI);
const db = mongoose.connection;

const PORT = process.env.PORT || 4000;
const app = express();
app.get('/', routeHandler.hello);
/* eslint-disable no-console */

module.exports = app;

db.on(
  'error',
  (err) => {
    console.error(
      'Cannot connect to Mongodb server\nError message is:',
      err.message,
    );
    process.exit(1);
  },
);

db.on(
  'open',
  () => {
    console.info('Server starting...');
    console.info('Connected to the database backend.');
    app.listen(PORT, handleListen(console.log, PORT));
  },
);
