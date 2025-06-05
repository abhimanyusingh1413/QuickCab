const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectTODb = require('./db/db.js');
const userRouter = require('./routes/user.routes.js');


connectTODb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.use('/users', userRouter);

module.exports = app;

