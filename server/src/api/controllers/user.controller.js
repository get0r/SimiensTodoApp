/* eslint-disable no-underscore-dangle */
const _ = require('lodash');

const config = require('../../config/config');
const UserServices = require('../../services/user.service');
const catchAsync = require('../../helpers/error/catchAsyncError');

const { appLogger } = require('../../helpers/logger/appLogger');
const { sendSuccessResponse, sendErrorResponse } = require('../../utils/responseBuilder');
const { BAD_REQUEST, NOT_FOUND } = require('../../helpers/constants/statusCodeConstants');

/**
 * a method to try register the user by calling services function
 * and send response to the client
 * @param {*} req request object
 * @param {*} res response object
 * @param {*} next next routing function in the chain
 */
const userSignUp = catchAsync(async (req, res) => {
  const userData = req.body;
  const user = await UserServices.signUp(userData);

  if (user === null) {
    return sendErrorResponse(res, BAD_REQUEST, 'username already exists');
  }
  const token = UserServices.generateToken(user._id, user.username);
  //  place the token on the cookie and send the user
  res.cookie('token', token, { httpOnly: true, secure: config.app.secureCookie, sameSite: true });
  appLogger.info(`User Registration Successful userId ${user._id}`);

  return sendSuccessResponse(res, { ..._.pick(user, ['_id', 'fname', 'lname', 'username']), token });
});

/**
 * a method to try authenticate the user by calling services function
 * and send response to the client
 * @param {*} req request object
 * @param {*} res response object
 * @param {*} next next routing function in the chain
 */
const userSignIn = catchAsync(async (req, res) => {
  const userData = req.body;
  const user = await UserServices.signIn(userData);

  if (user === null) {
    return sendErrorResponse(res, BAD_REQUEST, 'username or password incorrect!');
  }
  const token = UserServices.generateToken(user._id, user.username);
  //  place the token on the cookie and send the user
  res.cookie('token', token, { httpOnly: true, secure: config.app.secureCookie, sameSite: true });
  appLogger.info(`User SignIn Successful userId ${user._id}`);

  return sendSuccessResponse(res, { ..._.pick(user, ['_id', 'fname', 'lname', 'username']), token });
});

const getUser = catchAsync(async (req, res) => {
  const user = await UserServices.getUser(req.userId);

  if (user === null) {
    return sendErrorResponse(res, NOT_FOUND, 'Not Found!');
  }
  const { token } = req.cookies;
  return sendSuccessResponse(res, { ..._.pick(user, ['_id', 'fname', 'lname', 'username']), token });
});

module.exports = {
  userSignUp,
  userSignIn,
  getUser,
};
