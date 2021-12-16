const express = require('express');

const authUser = require('../../middlewares/auth/user.auth');
const UserControllers = require('../../controllers/user.controller');
const UserValidator = require('../../middlewares/validator/user.joi.validator');

const userRouter = express.Router();

userRouter
  .post('/signUp', UserValidator.validateUserSignUp, UserControllers.userSignUp);

userRouter
  .post('/signIn', UserValidator.validateUserSignIn, UserControllers.userSignIn);

userRouter
  .get('/user', authUser, UserControllers.getUser);

module.exports = userRouter;
