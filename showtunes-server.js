const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

//Auth
require("dotenv").config();
const expressJWT = require("express-jwt");


const PORT = 8080;
const MONGODB_URI = 'mongodb://localhost:27017/showtunes';
const app = express();

app.use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use("/private", expressJWT({ secret: process.env.SECRET }))
    .use("/private/admin", require("./routes/admin"))
    .use('/songs', require('./routes/songs'))
    .use("/oauth", require("./routes/oauth"))
    .use("/private/addadmin", require("./routes/addAdmin"))
    .use("/login", require("./routes/login"))
    .use((err, req, res, next) => {
        res.status(400).send(err)
    });


mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then((db) => console.log("DB is Online!"))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Connected to showtunes Server on ${PORT}`));