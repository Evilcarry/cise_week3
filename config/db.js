const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

mongoose.connect(process.env.MONGODB_URI || db, {
  useNewUrlParser: true
});

module.exports = connectDB;