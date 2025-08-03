require('dotenv').config();
const express = require('express');
const cors = require('cors');
const winston = require('winston');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users.routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.route('/').get((req, res) => {
    res.status(200).json('5000 runing...');
});

app.use('/users', usersRouter);

const dbURL = process.env.MONGOOSEURL || 8087;

mongoose.connect(dbURL, {
    useNewURLParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    winston.info(`Mongoose connection established!`);
});

const server = require("http").createServer(app);



server.listen(PORT, () => {
    winston.info(
        `The application has booted, follow the link for doc : ${process.env.APIURL}/api-docs`
    );

});