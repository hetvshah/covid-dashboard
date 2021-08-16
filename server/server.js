// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import usersRouter from './routes/users.js';

dotenv.config();

// require('dotenv').config();

// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`Server is running on port: ${port}`))
  )
  .catch((err) => console.log(err));

// const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});