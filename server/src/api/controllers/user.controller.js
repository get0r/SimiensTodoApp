/* eslint-disable no-underscore-dangle */
const _ = require('lodash');

const config = require('../../config/config');
const UserServices = require('../../services/user.service');

const { appLogger } = require('../../helpers/logger/appLogger');
const { sendSuccessResponse, sendErrorResponse } = require('../../utils/responseBuilder');
const { BAD_REQUEST } = require('../../helpers/constants/statusCodeConstants');

/**
 * a method to try register the user by calling services function
 * and send response to the client
 * @param {*} req request object
 * @param {*} res response object
 * @param {*} next next routing function in the chain
 */
const userSignUp = async (req, res, next) => {
  const userData = req.body;
  try {
    const user = await UserServices.signUp(userData);

    if (user === null) {
      return sendErrorResponse(res, BAD_REQUEST, 'username already exists');
    }
    const token = UserServices.generateToken(user._id, user.username);
    //  place the token on the cookie and send the user
    res.cookie('token', token, { httpOnly: true, secure: config.app.secureCookie, sameSite: true });
    appLogger.info(`User Registeration Successful userId ${user._id}`);

    return sendSuccessResponse(res, _.pick(user, ['fname', 'lname', 'username']));
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  userSignUp,
};
