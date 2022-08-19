require("dotenv").config({path: './.env'});
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors');

const app = express();
app.use(cors({origin: true, credentials:true}));

//models
const books = require("./routes/api/books");

mongoose
    .connect(
        process.env.mongoURI,
        {
                userNewUrlParser: true,
                useUnifiedTopology: true,
        }
    )
    .then(() => console.log("MongoDB has been connected"))
    .catch((err) => console.log(err));


// Init Middleware
//app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json({extended: false}));

// routes
//require('./routes/api/books.js')(app);
app.use('./routes/api/books.js', books);

//test
const port = process.env.PORT || 5000;
if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "./frontend/build")));
    app.get("*", (req, res) => {
        response.sendFile(path.join(__dirname, "frontend", 'build' ,'index.html'));
    });
}else{
    app.get('/', (req, res) => {res.send("Api running")});
}

app.listen(port, () => console.log(`Server running on port ${port}`));