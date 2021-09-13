const JWT = require('jsonwebtoken');

const config = require('../config/config');
const UserModel = require('../database/models/user.model');

const { hashString, compareHash } = require('../utils/hashGenerator');

/**
 * a method to attempt to write user data to database and return the written object.
 * or throw an error in times of error.
 * @param {Object} param0 user details.
 */
const signUp = async ({
  fname, lname, username, password,
}) => {
  const doesUserExist = await UserModel.findOne({ username }).lean();
  //   the inserted user name exists
  if (doesUserExist) {
    return null;
  }
  const hashedPassword = await hashString(password);
  const newUser = new UserModel({
    fname,
    lname,
    username,
    password: hashedPassword,
  });
  const savedUser = await newUser.save();

  return savedUser;
};

/**
 * a method to attempt to auth user by checking the availability
 * of the user and the associated password.
 * or throw an error in times of error.
 * @param {Object} param0 user details.
 */
const signIn = async ({ username, password }) => {
  const user = await UserModel.findOne({ username }).lean();
  //   user doesn't exist so stop proceeding.
  if (!user) {
    return null;
  }

  const isPasswordRight = await compareHash(password, user.password);

  if (!isPasswordRight) {
    return null;
  }

  return user;
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
  signIn,
  generateToken,
};
