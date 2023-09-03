const express = require('express');
const app = express();

const apiRouter = require('./src/Routes/api');
app.use('/api', apiRouter);

module.exports = app;

