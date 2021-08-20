const catchAsync = require('../../../helpers/error/catchAsyncError');
const UserValidationSchema = require('../../../helpers/validationSchema/user.joi.schema');

/**
 * a method to validate client login data for further processing.
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Function} next next middleware function
 * @returns the result of the login controller.
 */
const userLoginValidator = catchAsync(async (req, res, next) => {
  //  asynchronously run validation.
  await UserValidationSchema
    .loginSchema.validateAsync(req.body, UserValidationSchema.schemaOptions);
  return next();
});

/**
 * a method to validate the client signup data using joi.
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Function} next the next middleware function
 * @returns result of the signup controller
 */
const userSignUpValidator = catchAsync(async (req, res, next) => {
  await UserValidationSchema
    .signUpSchema.validateAsync(req.body, UserValidationSchema.schemaOptions);
  return next();
});

module.exports = {
  userLoginValidator,
  userSignUpValidator,
};
