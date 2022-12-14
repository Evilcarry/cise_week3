const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
require("dotenv").config();

const connectDB = async() =>{
  mongoose.connect(process.env.mongoURI || db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

module.exports = connectDB;