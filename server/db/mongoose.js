const mongoose = require('mongoose');
const variables = require('../../server-variables/variables');
mongoose.Promise = global.Promise;
mongoose.connect(variables.getUrl());

module.exports = {mongoose};