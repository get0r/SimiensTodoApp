const ValidationError = require('../../../helpers/error/ValidationError');
const UserValidationSchema = require('../../../helpers/validationSchema/user.joi.schema');

/**
 * a method to validate client login data for further processing.
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Function} next next middleware function
 * @returns the result of the login controller.
 */
const userLoginValidator = async (req, res, next) => {
  try {
    //  asynchronously run validation.
    await UserValidationSchema
      .loginSchema.validateAsync(req.body, UserValidationSchema.schemaOptions);
    return next();
  } catch (error) {
    return next(new ValidationError(error.message));
  }
};

/**
 * a method to validate the client signup data using joi.
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Function} next the next middleware function
 * @returns result of the signup controller
 */
const userSignUpValidator = async (req, res, next) => {
  try {
    await UserValidationSchema
      .signUpSchema.validateAsync(req.body, UserValidationSchema.schemaOptions);
    return next();
  } catch (error) {
    return next(new ValidationError(error.message));
  }
};

module.exports = {
  userLoginValidator,
  userSignUpValidator,
};
