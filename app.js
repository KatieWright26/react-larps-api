const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const larps = require('./routes/larps');
const characters = require('./routes/characters');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/larps', larps);
app.use('/api/v1/characters', characters);

module.exports = app;
