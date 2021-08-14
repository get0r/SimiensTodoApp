const express = require('express');
const userSignUp = require('../../controllers/user.controller');

const userRouter = express.Router();

userRouter
  .post('/signUp', userSignUp);

module.exports = userRouter;
