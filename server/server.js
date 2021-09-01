// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import usersRouter from './routes/users.js';
import pinsRouter from './routes/pins.js';

dotenv.config();

// require('dotenv').config();

// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());
app.use(express.json());
app.use('/users', usersRouter);
app.use('/pins', pinsRouter);

// app.use('/', (req, res) => {
//   res.send('hello to pins api');
// });

const uri = process.env.ATLAS_URI;
mongoose.set('useFindAndModify', false);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  )
  .catch((err) => console.log(err));

// const usersRouter = require('./routes/users');

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
