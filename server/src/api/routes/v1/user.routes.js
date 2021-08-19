const express = require('express');

const UserControllers = require('../../controllers/user.controller');
const UserValidator = require('../../middlewares/validator/user.joi.validator');

const userRouter = express.Router();

userRouter
  .post('/signUp', UserValidator.userSignUpValidator, UserControllers.userSignUp);

module.exports = userRouter;
