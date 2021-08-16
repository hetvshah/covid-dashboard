import express from 'express';
import { signup, login } from '../controllers/user.js';

// const router = require('express').Router();
// let User = require('../models/user.model');

// router.route('/').get((req, res) => {
//   User.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const username = req.body.username;
//   const pins = req.body.pins;

//   const newUser = new User({ username, pins });

//   newUser
//     .save()
//     .then(() => res.json('User added!'))
//     .catch((err) => res.status(400).json('Error: ' + err));
// });

// module.exports = router;

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;
