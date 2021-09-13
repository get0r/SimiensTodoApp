const express = require('express');

const UserControllers = require('../../controllers/user.controller');
const UserValidator = require('../../middlewares/validator/user.joi.validator');

const userRouter = express.Router();

userRouter
  .post('/signUp', UserValidator.validateUserSignUp, UserControllers.userSignUp);

userRouter
  .post('/signIn', UserValidator.validateUserSignIn, UserControllers.userSignIn);

module.exports = userRouter;
