const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const cors = require('cors');

const app = express();
app.use(cors());

//models
require("./models/book");

const server = http.createServer(process.env.PORT || 3000);

mongoose
    .connect(
        process.env.MONGODB_CONNECTION_STRING,
        {
                userNewUrlParser: true,
                useUnifiedTopology: true,
        }
    )
    .then(() => console.log("MongoDB has been connected"))
    .catch((err) => console.log(err));


// Init Middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// routes
require('./routes/api/books.js')(app);

//test
const port = process.env.PORT || 8082;

const path = require("path");

const { response } = require('express');

app.use(express.static(path.resolve(__dirname, "./frontend/build")));

app.get("*", function(req, res) {
    response.sendFile(path.resolve(__dirname, "./frontend/build", index.html));
})

app.listen(port, () => console.log(`Server running on port ${port}`));