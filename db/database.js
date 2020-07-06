const mongoose = require('mongoose');

require('dotenv').config();

const uri = process.env.URI;

const db = mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

module.exports = db;