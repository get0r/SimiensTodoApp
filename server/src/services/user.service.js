const JWT = require('jsonwebtoken');
const _ = require('lodash');

const config = require('../config/config');
const UserModel = require('../database/models/user.model');
const ApiError = require('../helpers/error/ApiError');

const { hashString } = require('../utils/hashGenerator');

/**
 * a method to attempt to write user data to database and return the written object.
 * or throw an error in times of error.
 * @param {Object} param0 user details.
 */
const signUp = async ({
  fname, lname, username, password,
}) => {
  const DoesUserExist = await UserModel.findOne({ username }).lean();
  //   the inserted user name exists
  if (DoesUserExist) {
    return null;
  }
  try {
    const hashedPassword = await hashString(password);
    const newUser = new UserModel({
      fname,
      lname,
      username,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();

    return _.pick(savedUser, ['fname', 'lname', 'username']);
  } catch (error) {
    throw new ApiError(error.message);
  }
};

/**
 * a method to generate a JWT token by signing userId and username of a client or user as a payload.
 * @param {String} userId unique id of the user on the database
 * @param {String} username username of the user
 */
const generateToken = (userId, username) => {
  const payload = { id: userId, username };
  return JWT.sign(payload, config.app.tokenSecret, { expiresIn: '48h' });
};

module.exports = {
  signUp,
  generateToken,
};
