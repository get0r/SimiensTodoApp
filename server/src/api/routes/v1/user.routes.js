const express = require('express');
const UserControllers = require('../../controllers/user.controller');

const userRouter = express.Router();

userRouter
  .post('/signUp', UserControllers.userSignUp);

module.exports = userRouter;
