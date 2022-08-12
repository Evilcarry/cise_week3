// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
//test
const path = require("path");
const { response } = require('express');
const port = process.env.PORT || 8082;

app.use(express.static(path.resolve(__dirname, "./frontend/build")));

app.get("*", function(req, res) {
    response.sendFile(path.resolve(__dirname, "./frontend/build", index.html));
})

//app.use(express.json({ extended: false }));
//app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
//app.use('/api/books', books);


if (process.env.NODE_ENV === 'production'){
    app.use(express.static('./frontend/build'))
}

app.listen(port, () => console.log(`Server running on port ${port}`));