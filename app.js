require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://'+ process.env.MONGO_USER + ':' + process.env.MONGO_PASSWORD + '@cluster-mongo.p6pbiro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-mongo');

const morgan = require('morgan');
app.use(morgan('combined'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const starRoutes = require('./api/routes/movies');
app.use('/movies', starRoutes);


app.use((req, res, next) => {
  res.status(404).json({ wiadomosc: 'Not found ' });
});

module.exports = app;
