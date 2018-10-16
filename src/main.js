const express = require('express');
const routeHandler = require('./routeHandler');
const handleListen = require('./handleListen');

const PORT = process.env.PORT || 4000;
const app = express();
app.get('/', routeHandler.hello);
/* eslint-disable no-console */
app.listen(PORT, handleListen(console.log, PORT));
module.exports = app;
