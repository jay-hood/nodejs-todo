const mongoose = require('mongoose');
const variables = require('../../server-variables/variables');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || variables.getUrl());

module.exports = {mongoose};