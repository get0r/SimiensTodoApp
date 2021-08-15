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
  const DoesUserExist = UserModel.findOne({ username });
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
      hashedPassword,
    });
    const savedUser = await newUser.save();

    return savedUser;
  } catch (error) {
    throw new ApiError(error.message);
  }
};

module.exports = {
  signUp,
};
